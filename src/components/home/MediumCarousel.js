import { fetchRssFeed } from '@/utils/helpers';
import { useEffect } from 'react';

export async function getServerSideProps() {
  const feed = await fetchRssFeed();
  return {
    props: {
      feed,
    },
  };
};

export default function MediumCarousel({ feed }) {
  useEffect(() => {
    console.log(feed)
  }, [])
}