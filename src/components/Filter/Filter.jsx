import css from './Filter.module.css';
import { filter } from 'redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filtered = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(filter(e.currentTarget.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        onChange={handleFilterChange}
        value={filtered}
        type="text"
        name="filter"
      />
    </label>
  );
};
