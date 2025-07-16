import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CategoryItem } from '@/types/category';

type Init = {
  selectedCategory: Partial<CategoryItem>;
  categoryTabId: string;
}

const initialState: Init = {
    selectedCategory: {},
    categoryTabId: '1',
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    selectedCategory: (state, action: PayloadAction<CategoryItem>) => {
        state.selectedCategory = action.payload;
        return state
    },
    selectedTabKey: (state, action: PayloadAction<string>) => {
        state.categoryTabId = action.payload;
        return state
    },
    updateState: (state, action: PayloadAction<Init>) => {
        state = action.payload;
        return state
    },
  },
})

export const { selectedCategory,selectedTabKey,updateState } = categorySlice.actions

export default categorySlice.reducer