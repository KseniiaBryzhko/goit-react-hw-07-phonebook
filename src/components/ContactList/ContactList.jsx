import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled.js';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filtered = useSelector(getFilter);

  const filteredContacts = (() => {
    const normalizedFilter = filtered.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  })();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
