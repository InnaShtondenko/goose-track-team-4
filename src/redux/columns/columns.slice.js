import { fetchColumns, addColumn, deleteColumn } from './columns.operations';

const { createSlice } = require('@reduxjs/toolkit');
const { columnsInitState } = require('./columns.init-state');

const columnSlice = createSlice({
  name: 'columns',
  initialState: columnsInitState,

  extraReducers: builder => {
    builder
      .addCase(fetchColumns.pending, state => {
        state.columns.isLoading = true;
      })
      .addCase(fetchColumns.fulfilled, (state, { payload }) => {
        state.columns.isLoading = false;
        state.columns.error = null;
        state.columns.columns = payload;
        })
      .addCase(fetchColumns.rejected, (state, { payload }) => {
        state.columns.isLoading = false;
        state.columns.error = payload;
        })
      .addCase(addColumn.pending, state => {
      })
      .addCase(addColumn.fulfilled, (state, { payload }) => {
        state.columns.columns.push(payload);
        state.columns.error = null;
      })
      .addCase(addColumn.rejected, (state, { payload }) => {
        state.columns.error = payload;
      })
      .addCase(deleteColumn.pending, state => {
      })
      .addCase(deleteColumn.fulfilled, (state, { payload }) => {
        
        state.columns.columns = state.columns.columns.filter(column => column._id !== payload);
        state.columns.error = null;
      })
      .addCase(deleteColumn.rejected, (state, { payload }) => {
        // state.columns.isLoading = false;
        state.columns.error = payload;
      });
  },
});

// export const { filterInputAction } = contactsSlice.actions;
export const columnsReducer = columnSlice.reducer;
