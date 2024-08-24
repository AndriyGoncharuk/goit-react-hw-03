import styles from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => (
  <li className={styles.item}>
    <p className={styles.text}>
      {name}: {number}
    </p>
    <button className={styles.button} onClick={onDelete}>
      Delete
    </button>
  </li>
);

export default Contact;
