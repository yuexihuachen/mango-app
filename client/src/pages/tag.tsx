import React, { useState } from "react";
import Tabs from "@/components/tabs/tabs";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { updateState } from "@/features/tag/tagSlice";

const EditTag = React.lazy(() => import('@/components/tag/editTag'));
const TagList = React.lazy(() => import('@/components/tag/tagList'));

const Tag = () => {
    const dispatch = useAppDispatch();
    const selectedKey = useAppSelector(state => state.tag.tagTabId);
  
  const items = [
    {
      key: '1',
      label: '列表',
      children: <TagList />
    },
    {
      key: '2',
      label: '编辑',
      children: <EditTag />
    }
  ];
  const onSelectTab = (key: string) => {
    dispatch(updateState({
        selectedTag: {},
        tagTabId: key
    }))
  }
  return <div className="block mt-5 w-full">
    <Tabs {...{ items, selectedKey, onSelectTab }} />
  </div>
}

export default Tag