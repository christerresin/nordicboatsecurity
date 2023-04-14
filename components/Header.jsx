import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.scss';
import ActiveLink from './ActiveLink';

function Header() {
  const [isChanged, setIsChanged] = useState('');
  const [top, setTop] = useState(true);

  const burgerStyles = isChanged ? `${styles.change}` : '';
  const linksStyle = isChanged ? `${styles.change}` : '';
  const bgStyles = isChanged ? `${styles.change_bg}` : '';
  const isSticky = top ? '' : `${styles.sticky}`;

  const navLinks = [
    {
      title: 'Hem',
      path: '/',
    },
    {
      title: 'Webbshop',
      path: 'https://www.nordicboatsecurity.com/webbshop/',
    },
    {
      title: 'Produkter',
      path: '/produkter',
    },
    {
      title: 'Tjänster',
      path: '/tjanster',
    },
    {
      title: 'Om oss',
      path: '/omoss',
    },
    {
      title: 'Nyheter',
      path: '/nyheter',
    },
  ];

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 0 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    scrollHandler(); // Explicit call so that the navbar gets blurred if current page offset is `window.pageYOffset > 20`

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  });

  return (
    <header id={styles.header}>
      <nav className={`${styles.nav} ${isSticky}`} id={styles.nav}>
        <Link href='/'>
          <a>
            <img
              className={`${styles.logo} ${isSticky}`}
              src='/menu_logo.webp'
              alt='Company Logo'
            />
          </a>
        </Link>
        <ul id={styles.links} className={linksStyle}>
          {navLinks.map((link) => (
            <li key={link.title}>
              <ActiveLink href={link.path}>{link.title}</ActiveLink>
            </li>
          ))}
        </ul>
        <Link href='https://www.nordicboatsecurity.com/webbshop/'>
          <a target='_blank' className={styles.cta}>
            WEBBSHOP
          </a>
        </Link>
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
