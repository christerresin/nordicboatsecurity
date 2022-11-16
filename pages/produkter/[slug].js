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
  const category = data.category;

  return {
    props: {
      header: header,
      description: description,
      usps: usps,
      images: images,
      header: header,
      specifications: specifications,
      category: category,
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
      <ProductInfomation grid='grid2' props={props} />
      <Usp grid='grid3' />
      <ProductSpecifications grid='grid4' props={props} />
      <Bottom grid='grid5' />
      <Footer grid='grid6' />
    </div>
  );
};

export default Produkt;
