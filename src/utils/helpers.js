import FeedParser from "feedparser";

export async function fetchRssFeed() {
  const feedParser = new FeedParser();
  const feed = await new Promise((resolve, reject) => {
    feedParser.on('error', reject);
    feedParser.on('end', resolve);
    feedParser.write(yourRssXmlData);
  });
  return feed.items;
};