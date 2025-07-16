import React, { useEffect, useState } from 'react';
import httpRequest from '@/lib/httpClient';
import { Response } from '@/types';
import { CategoryItem } from '@/types/category';
import { message, Modal } from 'antd';
import { useAppDispatch } from '@/hooks';
import { updateState } from '@/features/category/categorySlice';

const CategoryList = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryList, setCategoryList] = useState<CategoryItem[]>([]);
  const [deCategory, setDeCategory] = useState<CategoryItem>();
  const handleOk = async () => {
    if (deCategory?.category_id) {
      const res = (await httpRequest.post(`/auth/category/delete`,{id: deCategory.category_id})) as Response<any>;
      if (res?.code === 0) {
        message.success('删除成功');
        const newCategoryList =categoryList.filter(ca => ca.category_id !== deCategory.category_id);
        setCategoryList(newCategoryList)
      } else {
        message.error('删除失败');
      }
      setIsModalOpen(false);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const fetchData = async () => {
      const res = (await httpRequest.post(`/auth/category/find`,{})) as Response<any>;
      if (res?.code === 0) {
        setCategoryList(res.data)
      } else {
        message.error('请求失败')
      }
  };

  useEffect(() => {
    fetchData()
  },[])
  const deleteCategory = (category: CategoryItem) => {
    setDeCategory(category)
    setIsModalOpen(true);
  };

  const editCategory = async (category: CategoryItem) => {
    dispatch(updateState({
      selectedCategory: category,
      categoryTabId: '2'
    }))
  };
  return <>
    <div className="z-20 grid grid-cols-5 text-base bg-white gap-y-4">
      <div className="p-3 border-b border-gray-200">类别ID</div>
      <div className="p-3 border-b border-gray-200">类别名称</div>
      <div className="p-3 border-b border-gray-200">类别别名</div>
      <div className="p-3 border-b border-gray-200">排序</div>
      <div className="p-3 border-b border-gray-200">
        <button
          type="button"
          onClick={fetchData}
          className="px-12 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          搜索
        </button>
      </div>
    </div>
    <div className="grid grid-cols-5 text-base pb-11">
      {categoryList.map((category: CategoryItem) => {
        const {
          category_id,
          category_name,
          category_alias,
          order
        } = category;
          return (
            <React.Fragment key={category_id}>
              <div className="px-3 py-6 border-b border-gray-200">
                {category_id}
              </div>
              <div className="px-3 py-6 border-b border-gray-200">
                {category_name}
              </div>
              <div className="px-3 py-6 border-b border-gray-200">
                {category_alias}
              </div>
              <div className="px-3 py-6 border-b border-gray-200">
                {order}
              </div>
              <div className="px-3 py-6 border-b border-gray-200 cursor-pointer">
                <span className="flex items-center ml-auto font-medium text-indigo-600">
                  <span
                    onClick={() => editCategory(category)}
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
                    onClick={() => deleteCategory(category)}
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
        title="确认删除当前类别信息"
        okText={'确认'}
        cancelText={'取消'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
      </Modal>
  </>
}

export default CategoryList