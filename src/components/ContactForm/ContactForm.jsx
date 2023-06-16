import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export const ContactForm = event => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handlerFormSubmit = ({ name, number }, actions) => {
    event.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in list`);
      return;
    }
    dispatch(addContact({ name, number }));
    actions.resetForm();
  };

  return (
    <form className={css.form} onSubmit={handlerFormSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          value={contacts.name}
          type="text"
          name="name"
          pattern="^[А-Яа-яЁёa-zA-Z\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          value={contacts.number}
          type="tel"
          name="number"
          pattern="\+?[0-9\s\-\(\)]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
