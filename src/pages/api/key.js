import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get('http://localhost:3000/api/key');
    const apiKey = response.data.apiKey;
    res.status(200).json({ apiKey });
  } catch (error) {
    console.log('Unable to retrieve API key: ', error);
    res.status(500).json({ error: 'Unable to retrieve API key' });
  }
}