import Parser from 'rss-parser';
import { useEffect } from 'react';

export async function getServerSideProps() {
  const parser = new Parser();
  let items = [];

  try {
    const feed = await parser.parseURL('https://medium.com/feed/@liamnaylorr');
    items = feed.items.map(item => ({
      title: item.title,
      link: item.link,
      categories: item.categories,
      creator: item['dc:creator'],
      pubDate: item.pubDate,
      updated: item['atom:updated'],
      content: item['content:encoded'],
    }));
  } catch (error) {
    console.error('Error fetching or parsing feed:', error);
  }

  return {
    props: {
      items,
    },
  };
}

export default function MediumCarousel({ items }) {
  useEffect(() => {
    console.log(items)
  }, [])
}