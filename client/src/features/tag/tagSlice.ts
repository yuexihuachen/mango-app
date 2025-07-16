import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TagItem } from '@/types/tag';

type Init = {
  selectedTag: Partial<TagItem>;
  tagTabId: string;
}

const initialState: Init = {
    selectedTag: {},
    tagTabId: '1',
}

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {
    selectedCategory: (state, action: PayloadAction<TagItem>) => {
        state.selectedTag = action.payload;
        return state
    },
    selectedTabKey: (state, action: PayloadAction<string>) => {
        state.tagTabId = action.payload;
        return state
    },
    updateState: (state, action: PayloadAction<Init>) => {
        state = action.payload;
        return state
    },
  },
})

export const { selectedCategory,selectedTabKey,updateState } = tagSlice.actions

export default tagSlice.reducer