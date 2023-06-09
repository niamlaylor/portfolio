import Heading2 from '../headers/h2';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectCTA from '../buttons/ProjectCTA';
import { getFormattedDate } from '@/utils/helpers';

export default function MediumCarousel() {
  const [rssData, setRssData] = useState([]);

  useEffect(() => {
    axios.get('/api/rss')
      .then((response) => {
        setRssData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (rssData.length > 0) {
    return (
      <div className="mx-auto mt-20 max-w-2xl lg:mx-0 bg-gray-100 p-5">
        <Heading2>Medium Articles</Heading2>
        <div className="flex flex-row">
          <dl className="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-1 md:grid-cols-2">
            {rssData.map((article, index) => (
              <div key={article.title[0]} className="flex flex-col-reverse hover:bg-gray-200 p-5">
                <ProjectCTA url={article.link[0]}>Read article</ProjectCTA>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">{article.title[0]}</dd>
                <dd className="text-sm font-light leading-9 tracking-tight text-black-500">{getFormattedDate(article.pubDate[0])}</dd>
              </div>
            ))}
          </dl>
        </div>
        
      </div>
    )
  } else {
    return <div></div>
  }
}
