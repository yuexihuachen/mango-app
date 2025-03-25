import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Note, InitNote } from '~/types';

const initialState: InitNote = {
    notes: []
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    searchNote: (state, action: PayloadAction<Note[]>) => {
        state.notes = action.payload
    }
  },
})

export const { searchNote } = noteSlice.actions

export default noteSlice.reducer