import Mail from '@mui/icons-material/MailOutlined';
import Call from '@mui/icons-material/CallOutlined';

import styles from '../styles/ContactBox.module.scss';

function ContactBox({ grid, contact }) {
  return (
    <>
      <div className={`${styles.container} ${grid}`}>
        <p className={styles.name}>
          {contact.name}
          <span className={styles.role}>, {contact.role}</span>
        </p>
        <p className={styles.phone}>
          <Call className={styles.icon} sx={{ fontSize: '16px' }} />
          {contact.phone}
        </p>
        <a href={`mailto: ${contact.email}`} className={styles.email}>
          <Mail className={styles.icon} sx={{ fontSize: '16px' }} />
          {contact.email}
        </a>
      </div>
    </>
  );
}

export default ContactBox;
