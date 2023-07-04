import axios from "axios";
import { parseStringPromise } from 'xml2js';

const fetchData = async (req, res) => {
  try {
    const response = await axios.get("https://medium.com/feed/@liamnaylorr");
    const data = await parseStringPromise(response.data);
    res.status(200).json(data.rss.channel[0].item);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(200).json([]);
  }
};

export default fetchData;
