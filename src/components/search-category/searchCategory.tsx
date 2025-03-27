import React, { useState } from 'react';
import httpRequest from '~/lib/httpClient';
import { Response, Category } from '~/types';
import Modal from '~/components/modal/modal';
import { useAppDispatch } from '~/hooks';
import { addCategory } from '~/features/category/categorySlice';
import { updateStatus } from '~/features/global/globalSlice';

function SearchCategory() {
  const [catetorys, setCatetorys] = useState([]);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [curCategory, setCurCategory] = useState(null);
  const searchCategorys = async () => {
    const res: Response<Category[]> = await httpRequest.post('/category/find', {});
    if (res?.code === 0) {
        setCatetorys(res.data)
    }
  };

  const onOk = async () => {
    setOpen(false);
    const data = await httpRequest.post('/auth/category/delete', {
      id: curCategory.id,
    }) as Response<Category> ;
    if (data?.code === 0) {
      dispatch(
        updateStatus({
          toast: {
            content: '删除成功',
            show: true,
          },
        }),
      );
      searchCategorys()
    }
  };

  const onCancel = () => {
    setOpen(false);
  }

  const deletePost = async (category) => {
    setCurCategory(category);
    setOpen(true);
  };

  const editPost = async (category) => {
    dispatch(addCategory(category));
    dispatch(updateStatus({tab:'3'}))
  };

  return (
    <>
      <div className="grid grid-cols-5 text-base pb-11">
        <div className="inline-grid items-center p-3 border-b border-gray-200">ID</div>
        <div className="inline-grid items-center p-3 border-b border-gray-200">名称</div>
        <div className="inline-grid items-center p-3 border-b border-gray-200">别名</div>
        <div className="inline-grid items-center p-3 border-b border-gray-200">排列顺序</div>
        <div className="inline-grid items-center p-3 border-b border-gray-200 cursor-pointer">
          <div>
            <button
                type="button"
                onClick={searchCategorys}
                className="px-8 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                搜索
            </button>
          </div>
        </div>
        {catetorys.map((category) => {
          return (
            <React.Fragment key={category.id}>
              <div className="px-3 py-6 border-b border-gray-200">
                {category.id}
              </div>
              <div className="px-3 py-6 border-b border-gray-200">{category.name}</div>
              <div className="px-3 py-6 border-b border-gray-200">{category.alias}</div>
              <div className="px-3 py-6 border-b border-gray-200">{category.orderid}</div>
              <div className="px-3 py-6 border-b border-gray-200 cursor-pointer">
                <span className="flex items-center ml-auto font-medium text-indigo-600">
                  <span
                    onClick={() => editPost(category)}
                    className="pointer-events-auto hover:text-indigo-500"
                  >
                    <img
                      className="w-4 h-4"
                      src={`/edit.svg`}
                      alt="Your Company"
                    />
                  </span>
                  <span className="w-px h-6 mx-3 bg-slate-400/20"></span>
                  <span
                    onClick={() => deletePost(category)}
                    className="pointer-events-auto hover:text-indigo-500"
                  >
                    <img
                      className="w-4 h-4"
                      src={`/delete.svg`}
                      alt="Your Company"
                    />
                  </span>
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <Modal
        {...{
          open,
          ...{ content: '确定删除当前类型？' },
          onOk,
          onCancel
        }}
      />
    </>
  );
}

export default SearchCategory;
