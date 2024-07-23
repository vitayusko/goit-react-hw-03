import React from "react";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";

const registerSchema = Yup.object({
  name: Yup.string()
    .required("This field is required")
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters"),
  number: Yup.string()
    .required("This field is required")
    .matches(/^[0-9]+$/, "Number must contain only digits")
    .min(3, "Number must be at least 3 digits")
    .max(15, "Number must be at most 15 digits"),
});

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    console.log(newContact);
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field className={s.input} name="name" />
            <ErrorMessage name="name" component="span" className={s.error} />
          </label>
          <label className={s.label}>
            <span>Number:</span>
            <Field className={s.input} name="number" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
