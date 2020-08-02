import { makeBadge } from '../../lib/badge';
import { json } from '../../lib/fetch';

export default makeBadge(async (query) => {
  const targetURL = query.url as string;
  const status = await json(
    `https://bookmark.hatenaapis.com/count/entry?url=https://${encodeURIComponent(
      targetURL,
    )}`,
  );

  return {
    label: 'hatena',
    color: 'blue',
    status,
  };
});
