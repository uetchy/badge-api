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

If you want your new badge location to be `badge.now.sh/foobar/:param`, then create a file named `[param].ts` in `api/foobar`.

## Release Guide (Maintainers only)

```bash
np
```
