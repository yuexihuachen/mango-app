import { NoteItem } from '@/types/note';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Init = {
  selectedNote: Partial<NoteItem>;
  noteTabId: string;
}

const initialState: Init = {
  selectedNote: {},
  noteTabId: '1'
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    updateNote: (state, action: PayloadAction<Init>) => {
        state = action.payload;
        return state
    }
  },
})

export const { updateNote } = noteSlice.actions

export default noteSlice.reducer