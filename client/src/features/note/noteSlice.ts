import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    notes: [],
    currentNote: {}
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    searchNote: (state, action: PayloadAction<any>) => {
        state.notes = action.payload
    },
    selectedNote: (state, action: PayloadAction<any>) => {
        state.currentNote = action.payload
    }
  },
})

export const { searchNote, selectedNote } = noteSlice.actions

export default noteSlice.reducer