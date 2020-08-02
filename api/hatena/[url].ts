import { NowRequest, NowResponse } from '@vercel/node';
import fetch from 'node-fetch';

export default async function (req: NowRequest, res: NowResponse) {
  try {
    const targetURL = req.query.url as string;
    const status = await fetch(
      `https://bookmark.hatenaapis.com/count/entry?url=https://${encodeURIComponent(
        targetURL,
      )}`,
    ).then((res) => res.text());
    res.setHeader('Cache-Control', 's-maxage=86400');
    res.json({ subject: 'hatena', status, color: 'blue' });
  } catch (err) {
    res.json({ error: err.message });
  }
}
