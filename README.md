# BestOfLinux Documentation

This is the official documentation site for [BestOfLinux.org](https://bestoflinux.org), a comprehensive platform for discovering, comparing, and installing Linux packages across multiple distributions.

Built with [Next.js](https://nextjs.org/) and [Fumadocs](https://fumadocs.dev/).

## Getting Started

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The documentation site includes:

- `lib/source.ts`: Content source adapter with [`loader()`](https://fumadocs.dev/docs/headless/source-api) for accessing content.
- `app/layout.config.tsx`: Shared layout options.
- `content/docs/`: Markdown documentation files.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | Landing page and non-documentation pages.              |
| `app/docs`                | Documentation layout and content pages.                |
| `app/api/search/route.ts` | Search API endpoint.                                   |

## Documentation Content

The documentation covers:

- Getting Started guides
- Package Discovery features
- Distribution Support information
- Installation instructions
- Data Visualization capabilities
- Technical documentation
- Community resources

## Development

### Fumadocs MDX

The `source.config.ts` file allows customization of various options including frontmatter schema.

For more details, read the [Fumadocs Introduction](https://fumadocs.dev/docs/mdx).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Fumadocs](https://fumadocs.dev)
- [BestOfLinux GitHub](https://github.com/bestoflinux)
