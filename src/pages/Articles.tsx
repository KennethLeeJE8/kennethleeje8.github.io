import Header from '@/components/Header';
import { useEffect, useState } from 'react';

interface Article {
  title: string;
  link: string;
  image?: string;
  description: string;
  pubDate?: string;
}

const RSS_URL = 'https://kennethleeje.substack.com/feed';

const parseRSS = async (): Promise<Article[]> => {
  const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(RSS_URL)}`);
  const data = await res.json();
  const parser = new window.DOMParser();
  const xml = parser.parseFromString(data.contents, 'text/xml');
  const items = Array.from(xml.querySelectorAll('item')).slice(0, 3);
  return items.map(item => {
    const title = item.querySelector('title')?.textContent || '';
    const link = item.querySelector('link')?.textContent || '';
    const description = item.querySelector('description')?.textContent || '';
    const pubDate = item.querySelector('pubDate')?.textContent || '';
    // Try to get image from media:content or enclosure
    let image = '';
    const media = item.getElementsByTagName('media:content')[0];
    if (media && media.getAttribute('url')) {
      image = media.getAttribute('url')!;
    } else {
      const enclosure = item.getElementsByTagName('enclosure')[0];
      if (enclosure && enclosure.getAttribute('url')) {
        image = enclosure.getAttribute('url')!;
      }
    }
    return { title, link, image, description, pubDate };
  });
};

function formatDate(dateStr?: string) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    parseRSS()
      .then(setArticles)
      .catch(() => setError('Failed to load articles.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-6">Articles</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            I write about data science, personal analytics, and the stories hidden in everyday numbers. 
            Here are my latest thoughts from Substack.
          </p>
          <div className="text-sm text-gray-500">
            <a href="#" className="hover:text-black transition-colors border-b border-gray-300 hover:border-black">
              Follow me on Substack →
            </a>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid gap-8 md:gap-12 grid-cols-1 md:grid-cols-2">
            {articles.map((article, idx) => (
              <article
                key={idx}
                className={`bg-white rounded-lg shadow-sm overflow-hidden${idx === 2 ? ' md:col-span-2 mx-auto' : ''}`}
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  {article.image ? (
                    <img src={article.image} alt={article.title} className="object-contain max-h-96 w-auto mx-auto" />
                  ) : (
                    <span className="text-gray-400">No Image</span>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-medium text-black mb-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Published on Substack</span>
                    <span>•</span>
                    <span>{formatDate(article.pubDate)}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-medium text-black mb-4">
                Want to read more?
              </h3>
              <p className="text-gray-600 mb-6">
                Subscribe to my Substack for weekly insights on data, analytics, and the quantified self movement.
              </p>
              <a href="#" className="inline-flex items-center bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors">
                Subscribe on Substack
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
