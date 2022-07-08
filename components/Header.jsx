import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.scss';

function Header() {
  const [isChanged, setIsChanged] = useState('');
  const burgerStyles = isChanged ? `${styles.change}` : '';
  const linksStyle = isChanged ? `${styles.change}` : '';
  const bgStyles = isChanged ? `${styles.change_bg}` : '';
  const [top, setTop] = useState(true);
  const isSticky = top ? '' : `${styles.sticky}`;

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 0 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); // Explicit call so that the navbar gets blurred if current page offset is `window.pageYOffset > 20`

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <header id={styles.header}>
      <nav className={`${styles.nav} ${isSticky}`} id={styles.nav}>
        <a href=''>
          <img
            className={styles.logo}
            src='menu_logo.webp'
            alt='Company Logo'
          />
        </a>
        <ul id={styles.links} className={linksStyle}>
          <li>
            <a>PRODUKTER</a>
          </li>
          <li>
            <Link href='/services'>
              <a>VÅRA TJÄNSTER</a>
            </Link>
          </li>
          <li>
            <a>REFERENSER</a>
          </li>
          <li>
            <a>OM OSS</a>
          </li>
          <li>
            <a>NYHETER</a>
          </li>
        </ul>
        <a className={styles.cta}>KONTAKTA OSS</a>
        <div
          id={styles.burger}
          className={burgerStyles}
          onClick={() => setIsChanged(!isChanged)}
        >
          <div id={styles.bar1} className={styles.bar}></div>
          <div id={styles.bar2} className={styles.bar}></div>
          <div id={styles.bar3} className={styles.bar}></div>
        </div>
        <div className={styles.space}></div>
      </nav>
      <div className={`${styles.bg} ${bgStyles}`} id={styles.bg}></div>
    </header>
  );
}

export default Header;
