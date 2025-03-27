import React from 'react';
import Tabs from '~/components/tabs/tabs';
import SearchCategory from '~/components/search-category/searchCategory';
import EditCategory from '~/components/edit-category/editCategoty';
import SaveCategory from '~/components/save-category/saveCategoty';

const Category = () => {
  const items = [
    {
      key: '1',
      label: '搜索',
      children: <SearchCategory />
    },
    {
      key: '2',
      label: '新增',
      children: <SaveCategory />
    },
    {
      key: '3',
      label: '',
      children: <EditCategory />
    }
  ];

  return (
    <>
      <h2 className="px-6 py-4 text-2xl font-bold tracking-tight text-gray-900">
      </h2>
      <Tabs items={items} itemKey={'1'} />
    </>
  );
};

export default Category;
