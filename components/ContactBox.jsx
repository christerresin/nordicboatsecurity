import styles from '../styles/ContactBox.module.scss';

function ContactBox({ grid, contact }) {
  return (
    <>
      <div className={`${styles.container} ${grid}`}>
        <p className={styles.name}>
          {contact.name}
          <span className={styles.role}>, {contact.role}</span>
        </p>
        <p className={styles.phone}>{contact.phone}</p>
        <a href={`mailto: ${contact.email}`} className={styles.email}>
          {contact.email}
        </a>
      </div>
    </>
  );
}

export default ContactBox;
