import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => (
  <div className={styles.contact}>
    <div className={styles.contactText}>
      <span>
        <FaUser className={styles.contactIcon} />
        {name}
      </span>
      <span>
        <FaPhoneAlt className={styles.contactIcon} />
        {number}
      </span>
    </div>
    <button onClick={() => onDelete(id)} className={styles.btn}>
      Delete
    </button>
  </div>
);

export default Contact;
