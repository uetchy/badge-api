# Contribution Guide

## Development Guide

```bash
git clone https://github.com/uetchy/badge.git && cd badge
npm install

npm i -g vercel
vc dev
```

### Adding new badge

1. Create file-system routes for new badge in `api/`
2. Update README.md
3. Create an pull request

#### File-system routes

If you want your new badge location to be `badge.now.sh/foobar/:baz`, then create a file named `[baz].ts` in `api/foobar`.

```ts
import { makeBadge } from '../../../lib/badge';
import { json } from '../../../lib/fetch';

export default makeBadge(async ({ baz }) => {
  const response = await json(`https://example.com/api?q=${baz}`);

  return {
    label: 'foobar',
    color: 'magenta',
    status: response.status,
  };
});
```
