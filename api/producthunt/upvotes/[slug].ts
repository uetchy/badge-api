import { makeBadge } from "../../../lib/badge";
import { graphql } from "../../../lib/fetch";

export default makeBadge(async ({ slug }) => {
  const status = await graphql(
    "https://api.producthunt.com/v2/api/graphql",
    `
      {
        post(slug: "${slug}") {
          votesCount
        }
      }
    `,
    {
      headers: {
        authorization: `Bearer ${process.env.PRODUCT_HUNT_TOKEN}`,
      },
    }
  );

  if (!status.post) {
    return {
      label: "upvotes",
      color: "gray",
      status: "not found",
    };
  }

  return {
    label: "upvotes",
    color: "cc4d29",
    status: status.post.votesCount.toString(),
  };
});
