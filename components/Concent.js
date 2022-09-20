import React, { useEffect, useState } from 'react';
import { setCookie, hasCookie } from 'cookies-next';

import styles from '../styles/Concent.module.scss';

function Consent() {
  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
    console.log('accepting cookies');
  };

  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
    console.log('denying cookie');
  };
  if (consent === true) {
    return null;
  }
  return (
    <div className={`${styles.concent_container} ${consent ? 'hidden' : ''}`}>
      <div className={styles.concent_box}>
        <div className={styles.concent_text_container}>
          <h3>Välkommen till NBS</h3>
          <p>
            Vi använder data för att analysera trafik på vår webbplats och dela
            information om användningen till våra analyspartners. Du kan läsa
            mer och ändra dina val på vår sida om datahantering och cookies. Läs
            mer på vår sida om datahantering och cookies.
          </p>
        </div>
        <div className={styles.concent_button_container}>
          <button
            onClick={() => {
              acceptCookie();
            }}
            className={`${styles.concent_button} ${styles.accept}`}
          >
            Acceptera alla
          </button>
          <button
            onClick={(e) => denyCookie()}
            className={styles.concent_button}
          >
            Neka alla
          </button>
        </div>
      </div>
    </div>
  );
}

export default Consent;
