import styles from '../styles/ServiceBox.module.scss';

function ServiceBox({ header, image, imgAlt, content }) {
  return (
    <a href='' className={styles.container}>
      <img className={styles.img} alt={imgAlt} src={image}></img>
      <h3>{header}</h3>
      <p>{content}</p>
    </a>
  );
}

export default ServiceBox;
