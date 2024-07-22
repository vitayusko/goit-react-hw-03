import React from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from "./ContactList.module.css";

const Contact = ({ handleDeleteContact, id, name, number }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperText}>
        <span className={s.text}>
          <FaUser /> {name}
        </span>
        <span className={s.text}>
          <FaPhoneAlt /> {number}
        </span>
      </div>
      <button onClick={() => handleDeleteContact(id)} className={s.btn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
