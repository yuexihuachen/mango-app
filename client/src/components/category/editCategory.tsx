import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { message } from 'antd';

import httpRequest from '@/lib/httpClient';
import { Response } from '@/types';
import { useAppSelector } from '@/hooks';

const EditCategory = () => {
  const [title, setTitle] = useState('');
  const [alias, setAlias] = useState('');
  const [order, setOrder] = useState<number>();
  const [messageApi, contextHolder] = message.useMessage();
  const selectedCategory = useAppSelector(state => state.category.selectedCategory);
  useEffect(() => {
    setTitle(selectedCategory.category_name as string || '')
      setAlias(selectedCategory.category_alias as string || '')
      setOrder(selectedCategory.order as number || 0)
  }, [selectedCategory])

  const handleData = async () => {
    if (!title || !alias || !order || order < 0) {
      messageApi.warning('请输入有效的数据');
      return false;
    }
    const createDate = dayjs().format();
    const isId = selectedCategory?.category_id;
    let res;
    if (isId) {
      res = (await httpRequest.post(`/auth/category/update`, {
        id: isId,
        title,
        alias,
        order,
        updateDate: createDate
      })) as Response<{}>;
    } else {
      res = (await httpRequest.post(`/auth/category/create`, {
        title,
        alias,
        order,
        createDate
      })) as Response<{}>;
    }

    if (res?.code !== 0) {
      messageApi.success(`${isId?'更新':'新增'}失败`);
    } else {
      messageApi.success(`${isId?'更新':'新增'}成功`)
    }
  };
  const onClear = () => {
    setTitle('')
    setAlias('')
    setOrder(0)
  }
  return <>
    {contextHolder}
    <div className='flex flex-row justify-end'>
      <button
        type="button"
        onClick={onClear}
        className="px-12 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
      >
        清空
      </button>
    </div>
    <div className="z-20 grid grid-rows-5 text-base bg-white gap-y-4">
      <div className="inline-grid items-end h-24 pr-3">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          标题
        </div>
        <div className="mt-2">
          <input
            name="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title || ''}
            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="inline-grid items-end h-24 pr-3">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          别名
        </div>
        <div className="mt-2">
          <input
            name="alias"
            type="text"
            onChange={(e) => setAlias(e.target.value)}
            value={alias || ''}
            autoComplete="given-name"
            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="inline-grid items-end h-24 pr-3">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          排序
        </div>
        <div className="mt-2">
          <input
            name="order"
            type="text"
            onChange={(e) => setOrder(parseInt(e.target.value,10))}
            value={order || 0}
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
export default EditCategory