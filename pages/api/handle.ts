// handler.js
import { NextApiRequest, NextApiResponse } from 'next';
import scrapeTwitterFollowerCount from '../api/scrap'; // Import the scrape function

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const followerCount = await scrapeTwitterFollowerCount();

    if (followerCount !== null) {
      // You can respond with the follower count or do something else with the data
      res.status(200).json({ followerCount });
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error('Error in handler:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
