## **Hi :)**

Nice to meet you! My name is **Ozan**. I’m a **Full-stack Developer** with a focus on Front-end particularly React ecosystem. I have a background in Electrical & Electronics Engineering and used to work as an R&D Manager, where I coordinated multiple software projects across various domains. Recently I’ve been working on my project Monkeymind 🐵, an AI based productivity tool helping people to reclaim their attention.

My email: ozan.yusufoglu@protonmail.com

Check Monkeymind: monkeymind.ai

## **How to use this repo?**

This is my personal web site built with Nextjs 14 with App Router, React and some Framer motion tricks. It also support rendering static blog pages from MDX files.

Feel free to clone it for learning purposes or modify it for your own personal site.

## **Parsing MDX file content with dynamic routing based on slugs data**

MDX is basically a markdown file but more powerful since you could use your custom React components in it. It's like what JSX for javascript.

First you need to populate the `/md` folder with your MDX files / article. Each file needs metadata in YAML form at the top of the file, as demonstrated in examples, so that utility functions inside `/util/getPostMetadata` file could fetch the files by their slug and render the markdown with dynamic routes for each article.

I used `MDX-Remote` to render markdown part of the file and`gray-matter` to parse frontmatter (YAML) part. Check documentation for `mdx-remote` for further details:

[https://github.com/hashicorp/next-mdx-remote?tab=readme-ov-file#react-server-components-rsc--nextjs-app-directory-suppor](https://github.com/hashicorp/next-mdx-remote?tab=readme-ov-file#react-server-components-rsc--nextjs-app-directory-support)

I used tailwindcss-typography and “prose” class to style markdown content. [Tailwind - Typography](https://github.com/tailwindlabs/tailwindcss-typography)

## Running the dev server

First, run the development server:

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
