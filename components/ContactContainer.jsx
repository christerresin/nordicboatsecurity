import styles from '../styles/ContactContainer.module.scss';
import ContactBox from '../components/ContactBox';

import { contactList } from '../contactList';

function ContactContainer({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      {contactList.map((contact, index) => (
        <ContactBox key={index} grid={'grid' + (8 + index)} contact={contact} />
      ))}
    </section>
  );
}

export default ContactContainer;
