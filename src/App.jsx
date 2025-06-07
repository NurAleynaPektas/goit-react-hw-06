import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./assets/components/ContactForm";
import SearchBox from "./assets/components/SearchBox";
import ContactList from "./assets/components/ContactList";
import { addContact } from "./assets/redux/contactsSlice";
import { changeFilter } from "./assets/redux/filtersSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const searchValue = useSelector((state) => state.filters.nameFilter);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleSearchChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox
        inputValue={searchValue}
        handleChange={handleSearchChange}
       
      />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
