This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

NOTES ON NODEFIEND.GITHUB.IO:

https://99designs.com/blog/creative-inspiration/color-combinations/

Darkmode: #18
#d902ee, #ffd79d, #f162ff, #320d3e

LightMode: #30
#829079, #ede6b9, #b9925e,

ANIMATION BETWEEN PAGES:

https://blog.sethcorker.com/shared-layout-page-transitions-nextjs-framer-motion



## Adding a font:

1. Add it to public/fonts/{font name}/{file name}.ttf
2. goto styles/globals.scss and add it there:

```
@font-face {
  font-family: "PoiretOne-Regular";
  src: url("/fonts/PoiretOne/PoiretOne-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

```

3. preload it inside of : <Head> inside of document.js:

```
<Head>
  <link
   rel="preload"
   href="/fonts/PoiretOne/PoiretOne-Regular.ttf"
   as="font"
   crossOrigin=""
 />
</Head>
```

4. than use it :

```
<Heading size="lg" fontSize="50px" style={{fontFamily: 'PoiretOne-Regular'}}>
  I'm overriding this heading
</Heading>
```





