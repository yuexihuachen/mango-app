import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { InitCategory, Category } from '~/types';
import httpRequest from '~/lib/httpClient';

const initialState: InitCategory= {
    category: {},
    loading: true,
    fetchResult: {}
}

export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator }
})

export const categorySlice = createAppSlice({
  name: 'category',
  initialState,
  reducers: (create) => ({
    addCategory: create.reducer((state, action) => {
      state.category = action.payload as unknown as Category;
    }),
    updateCategory: create.asyncThunk(async (categoryBody: any) => {
      const res = await httpRequest.post('/auth/category/update', categoryBody);
      return res
    }, {
      pending: (state) => {
        state.loading = true;
      },
      rejected: (state) => {
        state.loading = false
      },
      fulfilled: (state, action) => {
        state.loading = false;
        state.fetchResult = action.payload;
      }
    })
  })
})

export const { updateCategory, addCategory } = categorySlice.actions

export default categorySlice.reducer