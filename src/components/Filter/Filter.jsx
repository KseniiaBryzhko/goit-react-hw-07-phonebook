import css from './Filter.module.css';
import { setFilter } from 'redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filtered = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const newFilterValue = event.target.value;
    dispatch(setFilter(newFilterValue));
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
