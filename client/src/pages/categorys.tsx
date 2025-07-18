import httpRequest from '@/lib/httpClient';
import { CategoryItem, Response } from '@/types';
import { groupBy } from '@/utils/utils';
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Categorys = () => {
  const [categoryList, setCategoryList] = useState<CategoryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Partial<CategoryItem>>({});

  const fetchData = async () => {
    const getCategoryInfo = httpRequest.post(`/category/findAll`, {});
    const getGroupByCategory = httpRequest.post(`/note/groupByFields`, {
      fieldName: 'category_id'
    });

    Promise.all([getCategoryInfo, getGroupByCategory]).then((res) => {
      const categorys = res[0] as unknown as Response<CategoryItem[]>;
      const groupByCategory = res[1] as unknown as Response<any>;
      if (categorys?.code === 0 && groupByCategory?.code === 0) {
        const groupByCategoryObj = groupBy(groupByCategory.data, 'category_id', 'count');
        const newCategorys = categorys.data.map((category) => ({
          count: groupByCategoryObj[category.category_id],
          ...category
        }))
        setCategoryList(newCategorys)
      } else {
        message.error({
          key: 1,
          content: '请求失败'
        })
      }

    })
  };

  useEffect(() => {
    fetchData();
  }, [])

  const onCategory = (category: CategoryItem) => {
    setSelectedCategory(category)
  }
  return <div className="container">
    <div className="flex my-12 gap-2">
      {
        categoryList.map((category) => {
          const {
            category_id,
            category_alias,
            count
          } = category;
        return <div onClick={() => onCategory(category)} key={category_id} className={`border border-gray-200 font-semibold hover:bg-indigo-600 hover:text-white cursor-pointer rounded-3xl px-4 py-2 text-sm shadow transition ${selectedCategory.category_id === category_id?'text-white bg-indigo-600':'bg-white'}`}>
            {category_alias} ({count})
          </div>
        })
      }
    </div>
    <div className='flex mt-10 flex-col gap-4'>
      <Link to="/zh-hans/swe/js-data-types">
      <div className="group flex w-full cursor-pointer list-none flex-col items-center justify-start rounded border border-slate-200 bg-white px-3 py-3 hover:shadow sm:flex-row sm:justify-between">
        <p className="min-w-0 flex-1 text-sm text-slate-800 group-hover:text-indigo-500 md:text-base">
        JavaScript 有哪些资料型别？该怎么辨别一个变数的资料型别？</p>
        <div className="h-full w-28 font-semibold text-indigo-500 group-hover:text-indigo-600 sm:text-end md:w-32">
          看详解
        </div>
      </div>
      </Link>
    </div>
  </div>
}

export default Categorys