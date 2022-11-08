import styles from '../styles/IndexGrid.module.scss';

function IndexGrid({ grid }) {
  return <div className={`${styles.container} ${grid}`}></div>;
}

export default IndexGrid;
