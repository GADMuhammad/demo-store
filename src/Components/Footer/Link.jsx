import styles from "./Footer.module.scss";

function Link({ name }) {
  return <a className={styles["footer-link"]}>{name}</a>;
}

export default Link;
