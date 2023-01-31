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

```javascript
<About grid='grid2' />
```

```javascript
function About({ grid }) {
  return <section className={`${styles.container} ${grid}`}></section>;
}
```
