import { configureStore } from '@reduxjs/toolkit';
import noteReducer from '~/features/note/noteSlice';
import globalReducer from '~/features/global/globalSlice';

export const store = configureStore({
  reducer: {
    note: noteReducer,
    global: globalReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch