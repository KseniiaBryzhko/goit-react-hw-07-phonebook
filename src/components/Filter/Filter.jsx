import { setFilter } from 'redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel, FilterInput } from './Filter.styled.js';

export const Filter = () => {
  const filtered = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const newFilterValue = event.target.value;
    dispatch(setFilter(newFilterValue));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        onChange={handleFilterChange}
        value={filtered}
        type="text"
        name="filter"
      />
    </FilterLabel>
  );
};
