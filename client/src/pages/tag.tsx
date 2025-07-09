import React, { useState } from "react";
import Tabs from "@/components/tabs/tabs";

const EditTag = React.lazy(() => import('@/components/tag/editTag'));
const TagList = React.lazy(() => import('@/components/tag/tagList'));

const Tag = () => {
  const [selectedKey, setSelectedKey] = useState<string>('1')
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
    setSelectedKey(key)
  }
  return <div className="block mt-5 w-7xl mx-auto">
    <Tabs {...{ items, selectedKey, onSelectTab }} />
  </div>
}

export default Tag