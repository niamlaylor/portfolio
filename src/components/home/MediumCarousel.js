import Heading2 from '../headers/h2';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MediumCarousel() {
  const [rssData, setRssData] = useState([]);

  useEffect(() => {
    axios.get('/api/rss')
      .then((response) => {
        setRssData(response.data);
        console.log('Component log: ', response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="mt-12">
      {rssData.length > 0 && <Heading2>Medium articles</Heading2>}
      <dl className="mt-8 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {rssData.length > 0 && rssData.map((article, index) => (
          <div key={index} className="flex flex-col-reverse hover:bg-gray-200 p-5">
            <dt className="text-base leading-7 text-gray-800">{article.title[0]}</dt>
            <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">{article.title[0]}</dd>
            <dd className="text-sm font-bold leading-9 tracking-tight text-blue-500">{article.pubDate[0]}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
