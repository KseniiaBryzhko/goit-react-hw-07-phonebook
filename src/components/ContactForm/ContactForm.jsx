import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import {
  AddContactForm,
  Label,
  Input,
  AddButton,
  CustomErrorMessage,
} from './ContactForm.styled.js';
import { Formik } from 'formik';
import * as yup from 'yup';

export const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        'Name may contain only letters, apostrophe, dash and spaces'
      )
      .required(),
    number: yup
      .string()
      .matches(
        '^[+]?[(]?[0-9]{1,4}[)]?[-s.]?[0-9]{1,4}[-s.]?[0-9]{1,6}$',
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required(),
  });

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = ({ name, number }, action) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in list`);
      action.resetForm();
      return;
    }

    dispatch(addContact({ name, number }));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      <AddContactForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <CustomErrorMessage name="name" component="div" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <CustomErrorMessage name="number" component="div" />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </AddContactForm>
    </Formik>
  );
};
