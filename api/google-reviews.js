export default async function handler(req, res) {
  const PLACE_ID = 'ChIJm_1WbERnUjoRTJSVIABJSiY'; // Replace with your actual Place ID
  const API_KEY = process.env.GOOGLE_API_KEY; // Make sure this is set in Vercel env vars

  if (!API_KEY) {
    return res.status(500).json({ error: 'Missing Google API key' });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.result) {
      return res.status(500).json({ error: 'No result from Google API', details: data });
    }

    res.status(200).json(data.result.reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews', details: error.message });
  }
}


// export default async function handler(req, res) {
//   const PLACE_ID = 'ChIJm_1WbERnUjoRTJSVIABJSiY';
//   const API_KEY = 'AIzaSyB3_seTGPaYPRjMd8cw5QfFE2HzngeqyMc';
//   const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     res.status(200).json(data.result.reviews);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch reviews', details: error.message });
//   }
// }
