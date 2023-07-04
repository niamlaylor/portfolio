import Heading2 from '../headers/h2';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function MediumCarousel() {
  const [rssData, setRssData] = useState([]);

  useEffect(() => {
    axios.get('/api/rss')
    .then((mediumData) => {
      setRssData(mediumData);
      console.log('Component log: ', mediumData.data[0].title[0]);
    })
  }, []);

  const articleArray = rssData.data.map((article) => {
    return <p>{article.title[0]}</p>
  })

  return (
    <div>
      <Heading2>Medium articles</Heading2>
      {articleArray}
    </div>
  )
};