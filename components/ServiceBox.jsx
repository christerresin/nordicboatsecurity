import styles from '../styles/ServiceBox.module.scss';

function ServiceBox({ header, image, content }) {
  return (
    <a href='' className={styles.container}>
      <img className={styles.img} alt='gps tracking' src={image}></img>
      <h3>{header}</h3>
      <p>{content}</p>
    </a>
  );
}

export default ServiceBox;
