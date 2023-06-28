import axios from "axios";
import { parseStringPromise } from 'xml2js';

const fetchData = async (req, res) => {
  const response = await axios.get("https://medium.com/feed/@liamnaylorr");
  const data = await parseStringPromise(response.data);
  res.status(200).json(data.rss.channel[0].item);
};

export default fetchData;
