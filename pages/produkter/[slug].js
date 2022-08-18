import { productList } from '../../productList';

export const getStaticPaths = async () => {
  const paths = productList.map((product) => ({
    params: {
      slug: product.productName,
    },
  }));

  console.log('paths: ' + paths);

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params: { slug } }) => {
  console.log(slug);
  const data = productList.find((product) => product.productName === slug);
  console.log(data);

  const title = data.title;
  const content = data.content;

  return {
    props: {
      title: title,
      content: content,
    },
  };
};

const Produkt = ({ title, content }) => {
  return (
    <div>
      <h1>Produktsida</h1>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Produkt;
