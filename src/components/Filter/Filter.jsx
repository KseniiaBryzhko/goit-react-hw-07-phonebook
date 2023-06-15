import PropTypes from 'prop-types';
import css from './Filter.module.css';
// import { useSelector } from 'react-redux';

export const Filter = ({ value, onChange }) => {
  // const filter = useSelector(state => state.filters.status);

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        onChange={onChange}
        value={value}
        type="text"
        name="filter"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
