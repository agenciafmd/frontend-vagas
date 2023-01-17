import styles from "./Container.module.sass";

function Container(props) {
  return <div className={styles.container_default}>{props.children}</div>;
}

export default Container;
