import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  number: Yup.string().min(7, "Must be at least 7 digits").required("Required"),
});

const ContactForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ name: "", number: "" }}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    }}
  >
    {() => (
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <Field className={styles.input} name="name" type="text" />
        <ErrorMessage className={styles.error} name="name" component="div" />

        <label className={styles.label} htmlFor="number">
          Number
        </label>
        <Field className={styles.input} name="number" type="text" />
        <ErrorMessage className={styles.error} name="number" component="div" />

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </Form>
    )}
  </Formik>
);

export default ContactForm;
