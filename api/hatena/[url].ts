import { makeBadge } from '../../lib/badge';
import { json } from '../../lib/fetch';

export default makeBadge(async ({ url }) => {
  const status = await json(
    `https://bookmark.hatenaapis.com/count/entry?url=https://${encodeURIComponent(
      url as string,
    )}`,
  );

  return {
    label: 'hatena',
    color: 'blue',
    status,
  };
});
