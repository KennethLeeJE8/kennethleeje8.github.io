const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const galleryDir = path.join(__dirname, '../public/images/book-gallery/leisure');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

function sanitize(str) {
  return str.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

function downloadImageBuffer(url) {
  // Always use https
  if (url.startsWith('http://')) url = url.replace('http://', 'https://');
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) return reject('Image not found');
      const data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

async function fetchGoogleBooksCover(title) {
  const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}`;
  const data = await fetchJSON(searchUrl);
  if (!data.items || !data.items.length) return null;
  const item = data.items[0];
  const imageLinks = item.volumeInfo && item.volumeInfo.imageLinks;
  if (!imageLinks) return null;
  // Prefer extraLarge, then large, then medium, then thumbnail
  return imageLinks.extraLarge || imageLinks.large || imageLinks.medium || imageLinks.thumbnail || null;
}

async function fetchOpenLibraryCover(title) {
  const searchUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`;
  const data = await fetchJSON(searchUrl);
  if (!data.docs || !data.docs.length) return null;
  const doc = data.docs[0];
  if (!doc.cover_i) return null;
  return `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`;
}

async function fetchCoverForBook(title) {
  const dest = path.join(galleryDir, sanitize(title) + '.jpg');
  let coverUrl = null;
  // Try Google Books first
  try {
    coverUrl = await fetchGoogleBooksCover(title);
    if (coverUrl) {
      const imgBuffer = await downloadImageBuffer(coverUrl);
      await sharp(imgBuffer)
        .resize(320, 480, { fit: 'cover' })
        .jpeg({ quality: 98, chromaSubsampling: '4:4:4' })
        .toFile(dest);
      console.log(`Saved and resized Google Books cover for '${title}' to ${dest}`);
      return;
    }
  } catch (e) {
    console.log(`Google Books failed for '${title}':`, e);
  }
  // Fallback to Open Library
  try {
    coverUrl = await fetchOpenLibraryCover(title);
    if (coverUrl) {
      const imgBuffer = await downloadImageBuffer(coverUrl);
      await sharp(imgBuffer)
        .resize(320, 480, { fit: 'cover' })
        .jpeg({ quality: 98, chromaSubsampling: '4:4:4' })
        .toFile(dest);
      console.log(`Saved and resized Open Library cover for '${title}' to ${dest}`);
      return;
    }
  } catch (e) {
    console.log(`Open Library failed for '${title}':`, e);
  }
  console.log(`No cover found for: ${title}`);
}

async function main() {
  const books = process.argv.slice(2);
  if (!books.length) {
    console.log('Usage: node fetchBookCovers.cjs "Book Title 1" "Book Title 2" ...');
    console.log('Make sure to run: npm install sharp');
    process.exit(1);
  }
  for (const title of books) {
    try {
      await fetchCoverForBook(title);
    } catch (e) {
      console.log(`Failed to fetch cover for '${title}':`, e);
    }
  }
}

main(); 