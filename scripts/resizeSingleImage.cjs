const sharp = require('sharp');
const path = require('path');

const input = path.join(__dirname, '../public/images/book-gallery/leisure/brave_new_world.jpeg');
const output = path.join(__dirname, '../public/images/book-gallery/leisure/brave_new_world.jpg');

sharp(input)
  .resize(320, 480, { fit: 'cover' })
  .jpeg({ quality: 90 })
  .toFile(output)
  .then(() => console.log('Image resized successfully!'))
  .catch(err => console.error('Error resizing image:', err)); 