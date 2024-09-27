import {createSlice} from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: { filter: ''},
	reducers: {
    onChangeFilter: (state, action) => {
      state.filter = action.payload
    },
  },
});

export const {onChangeFilter} = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
export const selectFilter = state => state.filter.filter;