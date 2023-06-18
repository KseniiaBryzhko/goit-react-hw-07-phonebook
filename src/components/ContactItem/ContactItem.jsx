import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ListItem, DeleteButton } from './ContactItem.styled.js';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      {name}: {number}
      <DeleteButton
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </DeleteButton>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
