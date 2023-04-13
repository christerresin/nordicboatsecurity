import Head from 'next/head';

import Bottom from '../../components/Bottom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Usp from '../../components/Usp';
import ProductInfomation from '../../components/ProductInfomation';
import ProductSpecifications from '../../components/ProductSpecifications';
import Top from '../../components/Top';
import HeaderGrid from '../../components/HeaderGrid';
import { productList } from '../../productList';
import { listOfProducts } from '../../listOfProducts';
import styles from '../../styles/Home.module.scss';
import TextSection from '../../components/TextSection';

export const getStaticPaths = async () => {
  const paths = listOfProducts.map((product) => ({
    params: {
      slug: product.category,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params: { slug } }) => {
  const data = listOfProducts.find((item) => item.category === slug);

  const products = data.products;
  const categoryDescription = data.categoryDescription;
  const category = data.category;
  const header = data.header;

  return {
    props: {
      products: products,
      categoryDescription: categoryDescription,
      category: category,
      header: header,
    },
  };
};

const Produkt = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nordic Boat Security</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Top
        title={props.header}
        text={
          'Du är alltid välkommen att kontakta oss för rådgivning eller med frågor om våra produkter och tjänster. Vi är redo att göra ditt båtliv tryggare!'
        }
      />
      <HeaderGrid grid='grid1' />
      {props.categoryDescription ? (
        <TextSection grid='grid2' content={props.categoryDescription} />
      ) : (
        ''
      )}
      {props.products.map((product, index) => (
        <>
          <ProductInfomation
            grid={'grid' + (index * 4 + 3)}
            props={product}
            key={index + 'info'}
          />
          <ProductSpecifications
            grid={'grid' + (index * 4 + 4)}
            props={product}
            key={index + 'specs'}
          />
        </>
      ))}
      <Bottom grid='grid26' />
      <Footer grid='grid27' />
    </div>
  );
};

export default Produkt;
