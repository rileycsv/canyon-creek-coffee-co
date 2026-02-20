# Canyon Creek Coffee Co Website

A website for Canyon Creek Coffee & Co in Calhoun, GA, modeled after [Casa Del Cafe](https://casa-del-cafe.vercel.app/).

## Quick Start (Static HTML)

Open `index.html` in your browser to view the site immediately—no build required. All images are in the `public/` folder.

## Next.js Version

The `canyon-creek-coffee/` folder contains a Next.js app for deployment to Vercel.

**Note:** Next.js 16 requires Node.js 20+. If you have an older Node version, use the static `index.html` instead.

To run the Next.js version:
```bash
cd canyon-creek-coffee
npm run dev
```

To deploy to Vercel:
```bash
cd canyon-creek-coffee
vercel
```

## Updating Content

- **Address/Phone/Hours:** Edit the Location and Contact sections in `index.html` or `canyon-creek-coffee/src/app/page.tsx` when you have the details.
- **Menu:** Update prices and items in the Menu section as needed.
