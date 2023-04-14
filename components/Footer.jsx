import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

import styles from '../styles/Footer.module.scss';

function Footer({ grid }) {
  return (
    <footer className={`${styles.footer} ${grid}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <a>
              <img alt='Company logo' src='/footer_logo.webp' />
            </a>
          </Link>
        </div>
        <div className={styles.footer_links}>
          <div className={styles.footer_list}>
            <ul className={styles.products}>
              <li className={styles.topic}>Produkter</li>
              <li>
                <Link href='/nyheter'>
                  <a>Spårning</a>
                </Link>
              </li>
              <li>
                <Link href='/produkter#list'>
                  <a>Sensorer och övervakning</a>
                </Link>
              </li>
              <li>
                <Link href='/produkter#list'>
                  <a>Video i realtid</a>
                </Link>
              </li>
              <li>
                <Link href='https://www.nordicboatsecurity.com/'>
                  <a target='_blank'>Webbshop</a>
                </Link>
              </li>
            </ul>
            <Link href='/produkter'>
              <a className={styles.red}>Se alla produkter &gt;</a>
            </Link>
          </div>
          <div className={styles.footer_list}>
            <ul className={styles.services}>
              <li className={styles.topic}>Tjänster</li>
              <li>
                <Link href='/tjanster#gost_services'>
                  <a>Övervakning i realtid</a>
                </Link>
              </li>
              <li>
                <Link href='/tjanster#westra_services'>
                  <a>Larmutryckningar</a>
                </Link>
              </li>
              <li>
                <Link href='/tjanster#nbs_services'>
                  <a>Rådgivning</a>
                </Link>
              </li>
              <li>
                <Link href='/kontakt'>
                  <a>Kontakta oss</a>
                </Link>
              </li>
            </ul>
            <Link href='/tjanster'>
              <a className={styles.red}>Läs om våra tjänster &gt;</a>
            </Link>
          </div>
          <div className={styles.footer_list}>
            <ul className={styles.about}>
              <li className={styles.topic}>Om Nordic Boat Security</li>
              <li>
                <Link href='/omoss'>
                  <a>Om Oss</a>
                </Link>
              </li>

              <li>
                <Link href='/cookiepolicy'>
                  <a>Cookiepolicy</a>
                </Link>
              </li>
              <li>
                <Link href='/integritetspolicy'>
                  <a>Integritetspolicy</a>
                </Link>
              </li>
              <li>
                <Link href='/allmannavillkor'>
                  <a>Allmänna villkor</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.social}>
          <a
            target='_blank'
            href='https://www.instagram.com/nordicboatsecurity/'
            rel='noopener noreferrer'
          >
            <i>
              <InstagramIcon sx={{ fontSize: '36px' }} />
            </i>
          </a>
          <a
            target='_blank'
            href='https://www.facebook.com/profile.php?id=100077903275556'
            rel='noopener noreferrer'
          >
            <i>
              <FacebookIcon sx={{ fontSize: '36px' }} />
            </i>
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/company/nordic-boat-security-ab/'
            rel='noopener noreferrer'
          >
            <i>
              <LinkedInIcon sx={{ fontSize: '36px' }} />
            </i>
          </a>
        </div>
      </div>
      <p className={styles.copyright}>&copy; 2023 Nordic Boat Security</p>
    </footer>
  );
}

export default Footer;
