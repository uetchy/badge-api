import { NowRequest, NowResponse } from '@vercel/node';

export default function (req, res) {
  res.end('badge.now.sh');
}
