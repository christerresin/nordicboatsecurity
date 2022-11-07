import Head from 'next/head';

import Bottom from '../../components/Bottom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Usp from '../../components/Usp';
import ProductInfomation from '../../components/ProductInfomation';
import ProductSpecifications from '../../components/ProductSpecifications';
import Top from '../../components/Top';
import { productList } from '../../productList';
import styles from '../../styles/Home.module.scss';

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
  const data = productList.find((product) => product.productName === slug);

  const header = data.header;
  const description = data.description;
  const usps = data.usps;
  const images = data.images;
  const specifications = data.specifications;

  return {
    props: {
      header: header,
      description: description,
      usps: usps,
      images: images,
      header: header,
      specifications: specifications,
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
      <ProductInfomation grid='grid6' props={props} />
      <Usp grid='grid7' />
      <ProductSpecifications grid='grid8' props={props} />
      <Bottom grid='grid9' />
      <Footer grid='grid10' />
    </div>
  );
};

export default Produkt;
