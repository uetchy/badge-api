import { makeBadge } from "../../../../lib/badge";
import { html } from "../../../../lib/fetch";

function makeErrorBadge(status: string) {
  return {
    label: "rating",
    color: "gray",
    status: status,
  };
}

export default makeBadge(async ({ country, id }) => {
  const url = `https://apps.apple.com/${country}/app/${id}`;
  const dom = await html(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0.2 Safari/605.1.15",
    },
  });

  const schemaContent = dom.window.document.querySelector(
    'script[name="schema:software-application"][type="application/ld+json"]'
  )?.textContent;

  if (!schemaContent) {
    return makeErrorBadge("missing schema");
  }

  const schema = JSON.parse(schemaContent);

  if (!schema.aggregateRating) {
    return makeErrorBadge("unavailable");
  }
  const rating = Math.round(schema.aggregateRating.ratingValue);
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);

  return {
    label: "rating",
    color: "0070c9",
    status: stars,
  };
});
