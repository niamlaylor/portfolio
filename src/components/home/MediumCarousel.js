import Heading2 from '../headers/h2';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProjectCTA from '../buttons/ProjectCTA';

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

  if (rssData.length > 0) {
    return (
      <div className="mx-auto mt-10 max-w-2xl lg:mx-0">
        <Heading2>Medium articles</Heading2>
        <div className="flex flex-row">
          <dl className="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-1 md:grid-cols-2">
            {rssData.map((article, index) => (
              <div key={index} className="flex flex-col-reverse hover:bg-gray-200 p-5">
                <ProjectCTA url={article.link[0]}>Read article</ProjectCTA>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">{article.title[0]}</dd>
                <dd className="text-sm font-bold leading-9 tracking-tight text-blue-500">{article.pubDate[0]}</dd>
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
