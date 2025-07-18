import React, { useState } from "react";
import Tabs from "@/components/tabs/tabs";

const EditDiscuss = React.lazy(() => import('@/components/discuss/editDiscuss'));
const DiscussList = React.lazy(() => import('@/components/discuss/discussList'));

const Category = () => {
  const [selectedKey, setSelectedKey] = useState<string>('1')
  const items = [
    {
      key: '1',
      label: '列表',
      children: <DiscussList />
    },
    {
      key: '2',
      label: '回复',
      children: <EditDiscuss />
    }
  ];
  const onSelectTab = (key: string) => {
    setSelectedKey(key)
  }
  return <div className="block mt-5 w-full">
    <Tabs {...{ items, selectedKey, onSelectTab }} />
  </div>
}

export default Category