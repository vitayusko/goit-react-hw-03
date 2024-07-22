import React, { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsData from "./../assets/contact.json";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [contacts, setContacts] = useState(contactsData);

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery)
  );

  return (
    <main>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox onSearch={handleSearch} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </main>
  );
};

export default App;
