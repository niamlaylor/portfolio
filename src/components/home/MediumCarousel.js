import rss from '@/pages/api/rss';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function MediumCarousel({ feed }) {
  const [rssData, setRssData] = useState([]);

  useEffect(() => {
    axios.get('/api/rss')
    .then((mediumData) => {
      setRssData(mediumData);
      console.log('Component log: ', mediumData.data);
    })
  }, []);
};