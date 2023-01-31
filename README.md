This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Current branches under development

tic-7-partnerpage
tic-8-gost

```bash
git checkout tic-7-partnerpage
# or
git checkout tic-8-gost
```

## About

The layout is based on a page level containing grid system. Each component needs to accept and use a grid prop.

```
<About grid='grid2' />
```

```
function About({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
    </section>
```
