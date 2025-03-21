import React from 'react';
import Tabs from '~/components/tabs/tabs';
import AddNote from '~/components/add-note/addNote';
import SearchNote from '~/components/search-note/searchNote';
import EditNote from '~/components/edit-note/editNote';
import ViewNote from '~/components/view-note/viewNote';

const Note = () => {
  const items = [
    {
      key: '1',
      label: '搜索',
      children: <SearchNote />
    },
    {
      key: '2',
      label: '新增',
      children: <AddNote />
    },
    {
      key: '3',
      label: '编辑',
      children: <EditNote />
    },
    {
      key: '4',
      label: '查看',
      children: <ViewNote />
    },
  ];

  return (
    <>
      <h2 className="px-6 py-4 text-2xl font-bold tracking-tight text-gray-900">
      </h2>
      <Tabs items={items} itemKey={'2'} />
    </>
  );
};

export default Note;
