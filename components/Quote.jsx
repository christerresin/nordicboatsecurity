import styles from '../styles/Quote.module.scss';
import FormatQuote from '@mui/icons-material/FormatQuoteOutlined';

function Quote({ quote, author, role, company, image }) {
  return (
    <>
      <div className={styles.container}>
        <span
          className={`${styles.material_symbols_outlined} ${styles.md_48} ${styles.icon}`}
        >
          <FormatQuote sx={{ fontSize: '76px' }} />
        </span>
        <blockquote>{quote}</blockquote>
        <p className={styles.name}>{author}</p>
        <p className={styles.role}>{role}</p>
        <p className={styles.company}>{company}</p>
      </div>
      <img
        alt='quote profile picture'
        src={image}
        className={styles.image}
      ></img>
    </>
  );
}

export default Quote;
