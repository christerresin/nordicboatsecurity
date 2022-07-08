import styles from '../styles/Products.module.scss';
import VideoCameraBack from '@mui/icons-material/VideoCameraBackOutlined';
import CrisisAlert from '@mui/icons-material/CrisisAlertOutlined';
import SatelliteAlt from '@mui/icons-material/SatelliteAltOutlined';
import BuildCircle from '@mui/icons-material/BuildCircleOutlined';

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
          <h3>Satellitspårning</h3>
          <p className={styles.product_box_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatibus nam id quidem reprehenderit facilis alias quos nobis.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatibus nam id quidem reprehenderit facilis alias quos nobis.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatibus nam id quidem reprehenderit facilis alias quos nobis.
          </p>
        </a>
        <a href='' className={styles.product_box}>
          <span
            className={`${styles.material_symbols_outlined} ${styles.md_48}`}
          >
            <BuildCircle sx={{ fontSize: '76px' }} />
          </span>
          <h3>Tillbehör</h3>
          <p className={styles.product_box_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatibus nam id quidem reprehenderit facilis alias quos nobis.
          </p>
        </a>
      </div>
      <a className={styles.cta_btn_products}>Se alla produkter</a>
    </section>
  );
}

export default Products;
