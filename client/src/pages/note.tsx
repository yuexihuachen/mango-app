import React, { useState } from "react";
import Tabs from "@/components/tabs/tabs";

const EditNote = React.lazy(() => import('@/components/note/editNote'));
const NodeList = React.lazy(() => import('@/components/note/noteList'));

const Note = () => {
  const [selectedKey, setSelectedKey] = useState<string>('1')
  const items = [
    {
      key: '1',
      label: '列表',
      children: <NodeList />
    },
    {
      key: '2',
      label: '编辑',
      children: <EditNote />
    }
  ];
  const onSelectTab = (key: string) => {
    setSelectedKey(key)
  }
  return <div className="block mt-5 w-7xl mx-auto">
    <Tabs {...{ items, selectedKey, onSelectTab }} />
  </div>
}

export default Note