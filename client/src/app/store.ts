import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '@/features/note/noteSlice';
import categoryReducer from '@/features/category/categorySlice';
import tagReducer from '@/features/tag/tagSlice';
import contextReducer from '@/features/context/contextSlice';

export const store = configureStore({
  reducer: {
    note: noteReducer,
    category: categoryReducer,
    context: contextReducer,
    tag: tagReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch