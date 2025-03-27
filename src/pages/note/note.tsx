import React from 'react';
import Tabs from '~/components/tabs/tabs';

const SearchNote = React.lazy(() => import('~/components/search-note/searchNote'))
const AddNote = React.lazy(() => import('~/components/add-note/addNote'))
const ViewNote = React.lazy(() => import('~/components/view-note/viewNote'))
const EditNote = React.lazy(() => import('~/components/edit-note/editNote'))

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
      label: '',
      children: <ViewNote />
    },
    {
      key: '4',
      label: '',
      children: <EditNote />
    },
  ];

  return (
    <>
      <Tabs items={items} />
    </>
  );
};

export default Note;
