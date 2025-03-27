import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { GloablStatus } from '~/types';

const initialState = {
  loading: false,
  tab: '1',
  toast: {
    content: '',
    show: false
  }
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateStatus: (state, action: PayloadAction<GloablStatus>) => {
        return Object.assign({}, state, action.payload)
    },
  },
})

export const { updateStatus } = globalSlice.actions

export default globalSlice.reducer;