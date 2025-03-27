import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { InitSelectedNote, Note } from '~/types';

const initialState: InitSelectedNote = {
  selectedNote: {}
}

export const selectedNoteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    selectedNote: (state, action: PayloadAction<Note>) => {
        state.selectedNote = action.payload
    }
  },
})

export const { selectedNote } = selectedNoteSlice.actions

export default selectedNoteSlice.reducer