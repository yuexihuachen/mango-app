import httpRequest from '@/lib/httpClient';
import { Response } from '@/types';
import { useState, useEffect } from 'react';
import React from 'react';
import { TPagination } from '@/types';
import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';

const Blog = () => {
  const [notes, setNotes] = useState<any>([]);
  const [pagination, setPagination] = useState<Partial<TPagination>>({});
  const fetchData = async () => {
    const res = (await httpRequest.post(`/note/blogNote`, {
      pageSize: 30,
      pageIndex: 1
    })) as Response<any>;


    if (res?.code === 0) {
      const total = res.data.total as number;
      setPagination({
        pageSize: res.data.pageSize,
        pageIndex: res.data.pageIndex,
        total
      })
      setNotes(res?.data?.result || []);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>上一步</a>;
    }
    if (type === 'next') {
      return <a>下一步</a>;
    }
    return originalElement;
  };

  return <div className="root">
    <div className="mb-10 flex gap-x-10 mt-16 justify-between">
      <div className='text-5xl'>
        <h1 className="font-black tracking-tight text-neutral-950 mb-6">
          博客
        </h1>
        <h5 className='text-xl'>路漫漫其修遠兮吾將上下而求索意思</h5>
      </div>
    </div>
    <div className='flex flex-col gap-y-4'>
      {
        notes.map((note) => {
          const {
            note_id,
            title,
            description,
            tag_id,
            category_id,
            push_date
          } = note;
          return <React.Fragment key={note_id}>
            <div className="block mb-4">
              <div>
                <div className="block">
                  <a className="text-3xl font-medium text-gray-900 hover:text-gray-600" href={`#`}>{title}</a>
                </div>
                <div className="block my-2">
                  <div className="text-xl text-gray-400">{description}</div>
                </div>
                <div className='block'>
                  <span className='bg-amber-100 text-amber-800 py-1 px-2 rounded-sm text-xs'>基准</span>
                  <span className='bg-red-100 text-red-700 py-1 px-2 rounded-sm text-xs mx-2'>博客</span>
                  <span className="w-24 text-sm text-gray-700">{push_date.slice(0, 10)}</span>
                </div>
              </div>
            </div>
          </React.Fragment>
        })
      }

      <div className="lg:flex">
        <div className="mr-10 w-32">
          <p className="mb-3 text-lg font-medium lg:mb-0">2025年7月</p>
        </div>
        <div>
          <div className="lg:flex">
            <div className="flex">
              <p className="w-24 text-sm text-gray-700 lg:text-base">2025-07-14</p>
              <div className=" text-sm text-gray-400 lg:hidden">科技与职涯思维</div>
            </div>
            <a className="text-base font-medium text-gray-900 underline underline-offset-2 hover:text-gray-600 lg:ml-3">
              做一个有意义的个人专案
            </a>
          </div>
          <div className="hidden text-sm font-medium text-gray-400 lg:block">
            科技与职涯思维
          </div>
        </div>
      </div>
    </div>
    <div className='my-16 flex justify-center select-none '>
      <Pagination defaultCurrent={pagination.pageIndex} total={300} showSizeChanger={false} itemRender={itemRender} />
    </div>
  </div>
}

export default Blog