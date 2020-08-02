import { NowRequest, NowResponse } from '@vercel/node';

export default function (_: NowRequest, res: NowResponse) {
  res.end('badge.now.sh');
}
