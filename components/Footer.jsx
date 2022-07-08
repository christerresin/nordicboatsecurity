import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

import styles from '../styles/Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <a>
              <img alt='Company logo' src='footer_logo.webp' />
            </a>
          </Link>
        </div>
        <div className={styles.footer_links}>
          <div className={styles.footer_list}>
            <ul className={styles.products}>
              <li className={styles.topic}>Produkter</li>
              <li>
                <a>Satellitspårning</a>
              </li>
              <li>
                <a>Sensorer och övervakning</a>
              </li>
              <li>
                <a>Video i realtid</a>
              </li>
              <li>
                <a>Tillbehör</a>
              </li>
            </ul>
            <Link href='/products'>
              <a className={styles.red}>Se alla produkter ></a>
            </Link>
          </div>
          <div className={styles.footer_list}>
            <ul className={styles.services}>
              <li className={styles.topic}>Tjänster</li>
              <li>
                <a>Övervakning i realtid</a>
              </li>
              <li>
                <a>Larmutryckningar</a>
              </li>
              <li>
                <a>Personlig installation</a>
              </li>
            </ul>
            <Link href='/services'>
              <a className={styles.red}>Läs om våra tjänster ></a>
            </Link>
          </div>
          <div className={styles.footer_list}>
            <ul className={styles.about}>
              <li className={styles.topic}>Om Nordic Boat Security</li>
              <li>
                <a>Om Oss</a>
              </li>
              <li>
                <a>Integritetspolicy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.social}>
          <a href=''>
            <i>
              <InstagramIcon sx={{ fontSize: '36px' }} />
            </i>
          </a>
          <a href=''>
            <i>
              <FacebookIcon sx={{ fontSize: '36px' }} />
            </i>
          </a>
          <a href=''>
            <i>
              <LinkedInIcon sx={{ fontSize: '36px' }} />
            </i>
          </a>
        </div>
      </div>
      <p className={styles.copyright}>&copy; 2022 Nordic Boat Security</p>
    </footer>
  );
}

export default Footer;
