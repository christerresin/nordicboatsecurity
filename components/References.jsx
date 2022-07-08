import styles from '../styles/References.module.scss';
import Quote from './Quote';

const quotes = [
  {
    quote:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur dolorum ullam debitis odio officia sed iure? Temporibus est facilis dicta cum possimus? Tenetur, adipisci laborum?',
    author: 'John Andersson',
    role: 'Säkerhetsansvarig',
    company: 'BÖB Alarm',
    image: 'profile_800.jpg',
  },
];

function References() {
  return (
    <section className={`${styles.container} ${styles.reveal}`}>
      <div className={styles.text}>
        <div className={styles.header}>
          <h2>Täckning i hela norden</h2>
          <div className={`${styles.divider} ${styles.red}`}></div>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>
      <div className={styles.quotes_container}>
        {quotes.map((entry) => (
          <Quote
            quote={entry.quote}
            author={entry.author}
            role={entry.role}
            company={entry.company}
            image={entry.image}
            key={entry.company}
          />
        ))}
      </div>
    </section>
  );
}

export default References;
