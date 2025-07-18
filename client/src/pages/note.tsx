import React, { useEffect, useState } from "react";
import Tabs from "@/components/tabs/tabs";
import httpRequest from '@/lib/httpClient';
import { Response, CategoryItem, TagItem } from '@/types';
import { useAppSelector, useAppDispatch } from "@/hooks";
import { updateNote } from "@/features/note/noteSlice";

const EditNote = React.lazy(() => import('@/components/note/editNote'));
const NodeList = React.lazy(() => import('@/components/note/noteList'));

const Note = () => {
  const dispatch = useAppDispatch();
  const [categoryList, setCategoryList] = useState<CategoryItem[]>([]);
  const [tagList, setTagList] = useState<TagItem[]>([]);
  const selectedKey = useAppSelector(state => state.note.noteTabId);

  const fetchCategoryData = async () => {
    const res = (await httpRequest.post(`/auth/category/find`, {})) as Response<any>;
    if (res?.code === 0) {
      setCategoryList(res.data)
    }
  };

  const fetchTagData = async () => {
    const res = (await httpRequest.post(`/auth/tag/find`, {})) as Response<any>;
    if (res?.code === 0) {
      setTagList(res.data)
    }
  };
  useEffect(() => {
    fetchCategoryData();
    fetchTagData();
  }, [])
  const items = [
    {
      key: '1',
      label: '列表',
      children: <NodeList {...{ tagList, categoryList }} />
    },
    {
      key: '2',
      label: '编辑',
      children: <EditNote {...{ tagList, categoryList }} />
    }
  ];
  const onSelectTab = (key: string) => {
    dispatch(updateNote({
      selectedNote: {},
      noteTabId: key
    }))
  }
  return <div className="block mt-5 w-full">
    <Tabs {...{ items, selectedKey, onSelectTab }} />
  </div>
}

export default Note