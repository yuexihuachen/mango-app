import React, { useState } from "react";
import Tabs from "@/components/tabs/tabs";

const EditCategory = React.lazy(() => import('@/components/category/editCategory'));
const CategoryList = React.lazy(() => import('@/components/category/categoryList'));

const Category = () => {
  const [selectedKey, setSelectedKey] = useState<string>('1')
  const items = [
    {
      key: '1',
      label: '列表',
      children: <CategoryList />
    },
    {
      key: '2',
      label: '编辑',
      children: <EditCategory />
    }
  ];
  const onSelectTab = (key: string) => {
    setSelectedKey(key)
  }
  return <div className="block mt-5 w-7xl mx-auto">
    <Tabs {...{ items, selectedKey, onSelectTab }} />
  </div>
}

export default Category