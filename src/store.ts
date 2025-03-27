import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '~/features/note/noteSlice';
import globalReducer from '~/features/global/globalSlice';
import categoryReducer from '~/features/category/categorySlice';
import selectedNoteReducer from '~/features/selected-note/selectedNoteSlice';

export const store = configureStore({
  reducer: {
    note: noteReducer,
    global: globalReducer,
    category: categoryReducer,
    selectedNote: selectedNoteReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch