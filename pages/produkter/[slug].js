import { productList } from '../../productList';

export const getStaticPaths = async () => {
  const paths = productList.map((product) => ({
    params: {
      slug: product.id.toString(),
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
  const data = productList.find((product) => product.id === parseInt(slug));
  console.log(data);

  const title = data.title;

  return {
    props: {
      title: title,
    },
  };
};

const Produkt = ({ title }) => {
  return (
    <div>
      <h1>Produktsida</h1>
      <h3>{title}</h3>
    </div>
  );
};

export default Produkt;
