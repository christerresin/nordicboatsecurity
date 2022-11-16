import styles from '../styles/HeaderGrid.module.scss';

function HeaderGrid({ grid }) {
  return <div className={`${styles.container} ${grid}`}></div>;
}

export default HeaderGrid;
