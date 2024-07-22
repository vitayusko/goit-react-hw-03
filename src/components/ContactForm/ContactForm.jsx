import React from "react";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { ErrorMessage, Field, Form, Formik } from "formik";

const ContactForm = () => {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required("this field is required")
      .min(3, "Name must be min 3 characters")
      .max(20, "name max 20 char."),
  });

  const initialValues = {
    name: "",
    number: "",
    id: (model.id = nanoid()),
  };

  const handleSubmit = (data, actions) => {
    console.log(data);
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
            <Field className={s.input} name="name" />
            <ErrorMessage name="number" component="span" className={s.error} />
          </label>
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

{
  /* 
// import * as Yup from "yup";

// const UserForm = () => { */
}
//   const registerSchema = Yup.object({
//     name: Yup.string()
//       .required("this field is required")
//       .min(3, "Name must be min 3 characters")
//       .max(20, "name max 20 char."),
//     surname: Yup.string()
//       .required("this field is required")
//       .min(3, "Surname must be min 3 characters")
//       .max(20, "Surname max 20 char."),
//     age: Yup.number()
//       .required("this field is required")
//       .min(14, "you must be more than 14 years old!")
//       .max(99, "wow"),
//     role: Yup.string().oneOff(["admin", "user"]),
//     email: Yup.string().email("Email is not valid"),
//   });

//   const initialValues = {
//     name: "",
//     surname: "",
//     age: "",
//     email: "",
//     role: "user",
//     about: "",
//   };

//   const handleSubmit = (data, actions) => {
//     console.log(data);
//     actions.resetForm();
//   };

//   return (
//     <div className={s.wrapper}>
//       <Formik
//         validationSchema={registerSchema}
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//       >
//         <Form className={s.form}>
//           <label className={s.label}>
//             <span>Name:</span>
//             <Field className={s.input} name="name" />
//             <ErrorMessage name="name" component="span" className={s.error} />
//           </label>
//           <label className={s.label}>
//             <span>Surname:</span>
//             <Field className={s.input} name="surname" />
//             <ErrorMessage name="surname" component="span" className={s.error} />
//           </label>
//           <label className={s.label}>
//             <span>Age:</span>
//             <Field className={s.input} name="age" />
//             <ErrorMessage name="age" component="span" className={s.error} />
//           </label>
//           <label className={s.label}>
//             <span>Email:</span>
//             <Field className={s.input} name="email" type="email" />
//             <ErrorMessage name="email" component="span" className={s.error} />
//           </label>
//           <label className={s.label}>
//             <span>Role:</span>
//             <Field className={s.input} name="role" as="select">
//               <ErrorMessage name="role" component="span" className={s.error} />

//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </Field>
//           </label>
//           <label className={s.label}>
//             <span>About:</span>
//             <Field className={s.input} as="textarea" name="about"></Field>
//             <ErrorMessage name="about" component="span" className={s.error} />
//           </label>
//           <button type="submit">Create</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default UserForm;
