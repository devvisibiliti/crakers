import fetch from 'node-fetch';

export default async function handler(req, res) {
  const PLACE_ID = 'ChIJm_1WbERnUjoRTJSVIABJSiY';
  const API_KEY = process.env.GOOGLE_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data.result.reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews', details: error.message });
  }
}
