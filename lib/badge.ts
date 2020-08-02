import { NowRequest, NowResponse, NowRequestQuery } from '@vercel/node';
import { badgen } from 'badgen';

export interface BadgenOptions {
  status: string;
  subject?: string;
  color?: string;
  label?: string;
  labelColor?: string;
  style?: 'flat' | 'classic';
  icon?: string;
  iconWidth?: number;
  scale?: number;
}

export function makeBadge(
  resolve: (query: NowRequestQuery) => Promise<BadgenOptions> | BadgenOptions,
) {
  return async (req: NowRequest, res: NowResponse) => {
    try {
      const isFlat = req.query.flat !== undefined;
      delete req.query.flat;
      const badge = badgen({
        ...(await Promise.resolve(resolve(req.query))),
        style: isFlat ? 'flat' : 'classic',
      });

      res.setHeader('Cache-Control', 's-maxage=86400');
      res.setHeader('Content-Type', 'image/svg+xml');
      res.send(badge);
    } catch (err) {
      res.json({ error: err.message });
    }
  };
}
