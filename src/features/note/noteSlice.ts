import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Note, InitNote } from '~/types';

const initialState: InitNote = {
    notes: [],
    currentNote: {}
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    searchNote: (state, action: PayloadAction<Note[]>) => {
        state.notes = action.payload
    },
    selectedNote: (state, action: PayloadAction<Note>) => {
        state.currentNote = action.payload
    }
  },
})

export const { searchNote, selectedNote } = noteSlice.actions

export default noteSlice.reducer