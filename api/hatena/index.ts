import { NowRequest, NowResponse } from '@vercel/node';

export default async function (req: NowRequest, res: NowResponse) {
  res.send('usage: https://badgen.net/https/badge.now.sh/<url>');
}
