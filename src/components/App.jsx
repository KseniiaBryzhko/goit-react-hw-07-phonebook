import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading, getFilter } from 'redux/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Phonebook, Title, ContactsTitle, Message } from './App.styled.js';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Phonebook>
      <Title>Phonebook</Title>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={filter}></Filter>{' '}
      {(isLoading && !error && (
        <>
          <Message>Loading...</Message>
        </>
      )) || <ContactList />}
      {error && <Message>Something went wrong. Please try again!</Message>}
    </Phonebook>
  );
};
