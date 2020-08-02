import { makeBadge } from '../../../lib/badge';
import { text } from '../../../lib/fetch';

export default makeBadge(async ({ url }) => {
  const status = await text(
    `https://bookmark.hatenaapis.com/count/entry?url=https://${encodeURIComponent(
      url as string,
    )}`,
  );

  return {
    label: 'hatena',
    color: '04A4DE',
    status,
  };
});
