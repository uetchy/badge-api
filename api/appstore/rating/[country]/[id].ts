import { makeBadge } from '../../../../lib/badge';
import { html } from '../../../../lib/fetch';

export default makeBadge(async ({ country, id }) => {
  const url = `https://apps.apple.com/${country}/app/${id}`;
  const dom = await html(url);
  const schema = JSON.parse(
    dom.window.document.querySelector(
      'script[name="schema:software-application"]',
    )?.textContent ?? '',
  );

  if (!schema.aggregateRating) {
    return {
      label: 'rating',
      color: 'gray',
      status: 'unavailable',
    };
  }
  const rating = schema.aggregateRating.ratingValue;

  return {
    label: 'rating',
    color: '0070c9',
    status: rating.toString(),
  };
});
