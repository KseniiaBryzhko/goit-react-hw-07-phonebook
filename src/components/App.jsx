// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import css from './App.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact, removeContact } from 'redux/contactsSlice';
// import { getContacts, getFilter, getFilteredContacts } from 'redux/selectors';
// import { setFilter } from 'redux/filtersSlice';

// export const App = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);
//   const filteredContacts = useSelector(getFilteredContacts);

//   const formSubmitHandler = (name, number) => {
//     if (
//       contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       alert(`${name} is already in list`);
//       return;
//     }

//     const action = addContact({ name, number });
//     dispatch(action);
//   };

//   const handleFilterChange = event => {
//     const action = setFilter(event.target.value.toLowerCase().trim());
//     dispatch(action);
//   };

//   const deleteContact = id => {
//     const action = removeContact(id);
//     dispatch(action);
//   };

//   return (
//     <div className={css.phonebook}>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm formSubmitHandler={formSubmitHandler}></ContactForm>
//       <h2 className={css.title}>Contacts</h2>
//       <Filter value={filter} onChange={handleFilterChange}></Filter>
//       <ContactList
//         contacts={filteredContacts}
//         deleteContact={deleteContact}
//       ></ContactList>
//     </div>
//   );
// };

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
// import { getContacts, getError, getIsLoading } from 'redux/selectors';
import { getError, getIsLoading } from 'redux/selectors';
import { getContacts, getFilter } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { setFilter } from 'redux/filtersSlice';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();
  // const { contacts, isLoading, error } = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  // const filteredContacts = useSelector(getFilteredContacts);

  const formSubmitHandler = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in list`);
      return;
    }

    dispatch(addContact({ name, number }));
  };

  const handleFilterChange = event => {
    const action = setFilter(event.target.value.toLowerCase().trim());
    dispatch(action);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const deleteContact = id => {
  //   dispatch(removeContact(id));
  // };

  return (
    <div className={css.phonebook}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm formSubmitHandler={formSubmitHandler}></ContactForm>
      <h2 className={css.title}>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange}></Filter>{' '}
      {(isLoading && !error && (
        <>
          <p>Loading...</p>
        </>
      )) || (
        <ContactList
        // contacts={filteredContacts}
        // deleteContact={deleteContact}
        ></ContactList>
      )}
    </div>
  );
};
