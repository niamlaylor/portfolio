export function getFormattedDate(rssDate) {
  const date = new Date(rssDate);
  const month = date.toLocaleString('en-US', {month: 'short'});
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};