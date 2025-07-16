import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { message } from 'antd';

import httpRequest from '@/lib/httpClient';
import { Response } from '@/types';
import { useAppSelector } from '@/hooks';

const EditTag = () => {
  const [name, setName] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const selectedTag = useAppSelector(state => state.tag.selectedTag);
  useEffect(() => {
    setName(selectedTag.tag_name as string || '')
  }, [selectedTag])

  const handleData = async () => {
    if (!name) {
      messageApi.warning('请输入有效的数据');
      return false;
    }
    const createDate = dayjs().format();
    const isId = selectedTag?.tag_id;
    let res;
    if (isId) {
      res = (await httpRequest.post(`/auth/tag/update`, {
        id: isId,
        name,
        updateDate: createDate
      })) as Response<{}>;
    } else {
      res = (await httpRequest.post(`/auth/tag/create`, {
        name,
        createDate
      })) as Response<{}>;
    }

    if (res?.code !== 0) {
      messageApi.success(`${isId?'更新':'新增'}失败`);
    } else {
      messageApi.success(`${isId?'更新':'新增'}成功`)
    }
  };
  return <>
  {contextHolder}
    <div className="z-20 grid grid-rows-5 text-base bg-white gap-y-4">
      <div className="inline-grid items-end h-24 pr-3">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          标签
        </div>
        <div className="mt-2">
          <input
            name="title"
            type="text"
            value={name || ''}
            onChange={e => setName(e.target.value)}
            autoComplete="given-name"
            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="inline-grid items-end h-24">
        <button
          type="button"
          onClick={handleData}
          className="px-12 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          保存
        </button>
      </div>
    </div>
  </>
}
export default EditTag