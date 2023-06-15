import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // const filteredContacts = useSelector(getFilter);

  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
