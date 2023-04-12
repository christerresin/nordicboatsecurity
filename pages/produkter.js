import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeaderGrid from '../components/HeaderGrid';
import ProductsList from '../components/ProductsList';
import SensorsList from '../components/SensorsList';
import Top from '../components/Top';
import styles from '../styles/Home.module.scss';
import TextSection from '../components/TextSection';
import { videosList } from '../videosList';
import { unitsList } from '../unitsList';
import { accessoriesList } from '../accessoriesList';
import {
  productsTextParagraphs,
  productsTextContent,
} from '../productsTextParagraphs';
import TextTwoLeftOneRightHeader from '../components/TextTwoLeftOneRightHeader';
import TextTwoLeftTwoRightHeader from '../components/TextTwoLeftTwoRightHeader';
import TextSectionDark from '../components/TextSectionDark';
import ProductsBoxes from '../components/ProductsBoxes';
import TextOneLeftOneRightHeaders from '../components/TextOneLeftOneRightHeaders';
import { productsContent } from '../productsContent';

export default function produkter() {
  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Nordic Boat Security (NBS) samarbetar med olika leverantörer och tillverkare av larmsystem, sensorer, spårsändare och videoövervakningsutrustning så att vi kan leverera skräddarsydda säkerhetslösningar anpassade just för ditt behov! Här hittar du ett urval av de produkter vi erbjuder!'
        />
        <title>Nordic Boat Security - Produkter</title>
      </Head>
      <Header />
      <Top
        title='Produkter'
        text={
          'Nordic Boat Security samarbetar med olika leverantörer och tillverkare av larmsystem, sensorer, spårsändare och videoövervakningsutrustning så att vi kan leverera skräddarsydda säkerhetslösningar anpassade just för ditt behov! Här hittar du ett urval av de produkter vi erbjuder!'
        }
      />
      <HeaderGrid grid='grid1' />
      <TextTwoLeftTwoRightHeader grid='grid2' content={productsContent[0]} />
      <TextSectionDark grid='grid3' content={productsContent[1]} />
      <TextTwoLeftOneRightHeader
        header='Spårsändare'
        content={productsTextParagraphs[0]}
        grid='grid4'
      />
      <TextSectionDark
        backgroundImage='/security.jpg'
        content={productsTextContent[0]}
        grid='grid5'
      />
      <ProductsBoxes grid='grid6' id='list' />
      <TextSectionDark
        backgroundImage='/camera.jpg'
        content={productsTextContent[1]}
        grid='grid7'
      />
      <TextSection grid='grid8' content={productsContent[2]} />
      <TextOneLeftOneRightHeaders grid='grid16' />

      <Bottom grid='grid18' />
      <Footer grid='grid19' />
    </div>
  );
}
