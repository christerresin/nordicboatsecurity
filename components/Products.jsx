import styles from '../styles/Products.module.scss';
import VideoCameraBack from '@mui/icons-material/VideoCameraBackOutlined';
import CrisisAlert from '@mui/icons-material/CrisisAlertOutlined';
import SatelliteAlt from '@mui/icons-material/SatelliteAltOutlined';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';

function Products() {
  return (
    <section className={`${styles.products_container} ${styles.reveal}`}>
      <div className={styles.products_box_container}>
        <a href='' className={styles.product_box}>
          <span
            className={`${styles.material_symbols_outlined} ${styles.md_48}`}
          >
            <SatelliteAlt sx={{ fontSize: '76px' }} />
          </span>
          <h3>SPÅRNING VIA SATELLIT ELLER 4G</h3>
          <p className={styles.product_box_text}>
            Vi erbjuder system med satellit-, eller 4G/LTE-kommunikation som
            grund. Du väljer själv!
          </p>
        </a>
        <a href='' className={styles.product_box}>
          <span
            className={`${styles.material_symbols_outlined} ${styles.md_48}`}
          >
            <CrisisAlert sx={{ fontSize: '76px' }} />
          </span>
          <h3>Sensorer och övervakning</h3>
          <p className={styles.product_box_text}>
            Batteri-, nivå-, eller temperaturvakt? Rörelsesensor eller sensorer
            för dörrar och luckor? Våra system är modulära, du väljer fritt!
          </p>
        </a>
        <a href='' className={styles.product_box}>
          <span
            className={`${styles.material_symbols_outlined} ${styles.md_48}`}
          >
            <VideoCameraBack sx={{ fontSize: '76px' }} />
          </span>
          <h3>Video i realtid</h3>
          <p className={styles.product_box_text}>
            Har du behov av videoövervakning av din båt? HD-kameror med inbyggd
            rörelsensor och möjlighet till direktsändning ger dig full kontroll
            över din båt!
          </p>
        </a>
        <a href='' className={styles.product_box}>
          <span
            className={`${styles.material_symbols_outlined} ${styles.md_48}`}
          >
            <GpsFixedOutlinedIcon sx={{ fontSize: '76px' }} />
          </span>
          <h3>GEO-FENCE</h3>
          <p className={styles.product_box_text}>
            Du kan enkelt upprätta ett geografiskt inhägnat område där systemet
            larmar så fort båten lämnar eller inträder området!
          </p>
        </a>
      </div>
      <a className={styles.cta_btn_products}>Se alla produkter</a>
    </section>
  );
}

export default Products;
