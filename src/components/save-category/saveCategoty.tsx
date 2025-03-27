import React, { useState } from 'react';
import httpRequest from '~/lib/httpClient';
import { Response, Category } from '~/types';
import { updateStatus } from '~/features/global/globalSlice';
import { useAppDispatch } from '~/hooks';

function SaveCategory() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>('');
  const [alias, setAlias] = useState<string>('');
  const [order, setOrder] = useState<number>(1);

  const saveCategorys = async () => {
    const res: Response<Category> = await httpRequest.post(
      '/auth/category/create',
      {
        name: title,
        alias,
        orderid: order,
      },
    );
    if (res?.code === 0) {
      dispatch(
        updateStatus({
          toast: {
            content: '新增成功',
            show: true,
          },
        }),
      );
    }
  };

  return (
    <>
      <div className="grid grid-rows-3 w-9/12  gap-y-3 mx-4 text-base sticky top-[55px] bg-white z-20">
        <div className="inline-grid items-end h-16 p-3">
          <div className="sm:col-span-3">
            <div className="block text-sm font-medium leading-6 text-gray-900">
              名称
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                autoComplete="given-name"
                value={title}
                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="inline-grid items-end h-16 p-3">
          <div className="sm:col-span-2">
            <div className="block text-sm font-medium leading-6 text-gray-900">
              别名
            </div>
            <div className="mt-2">
              <input
                name="title"
                onChange={(e) => setAlias(e.target.value)}
                type="text"
                autoComplete="given-name"
                value={alias}
                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="inline-grid items-end h-16 p-3">
          <div className="sm:col-span-2">
            <div className="block text-sm font-medium leading-6 text-gray-900">
              排列顺序
            </div>
            <div className="mt-2">
              <input
                name="order"
                onChange={(e) => setOrder(parseInt(e.target.value, 10))}
                type="number"
                autoComplete="given-name"
                value={order}
                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="inline-grid items-end justify-end h-16 p-3">
          <button
            type="button"
            onClick={saveCategorys}
            className="px-8 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            保存
          </button>
        </div>
      </div>
    </>
  );
}

export default SaveCategory;
