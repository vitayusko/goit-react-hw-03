import React from "react";
import Contact from "./Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <div className={s.contactList}>
      {contacts.map((item) => (
        <Contact
          key={item.id}
          handleDeleteContact={handleDeleteContact}
          {...item}
        />
      ))}
    </div>
  );
};

export default ContactList;
