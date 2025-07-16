import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Init = {
  deleteModal: boolean;
}

const initialState: Init = {
    deleteModal: false
}

export const contextSlice = createSlice({
  name: 'context',
  initialState,
  reducers: {
    handleState: (state, action: PayloadAction<Init>) => {
        state = action.payload;
        return state
    },
  },
})

export const { handleState } = contextSlice.actions

export default contextSlice.reducer