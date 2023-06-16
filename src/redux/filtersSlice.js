import { createSlice } from '@reduxjs/toolkit';

// const filterInitialState = '';

// const filtersSlice = createSlice({
//   name: 'filter',
//   initialState: filterInitialState,
//   reducers: {
//     filter: {
//       reducer(state, action) {
//         state = action.payload.value;
//         return state;
//       },
//       prepare(value) {
//         return {
//           payload: {
//             value,
//           },
//         };
//       },
//     },
//   },
// });

// export const { filter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;

const filterInitialState = '';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
