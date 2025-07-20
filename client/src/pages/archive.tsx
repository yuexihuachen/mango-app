import httpRequest from '@/lib/httpClient';
import { Response } from '@/types';
import { useState, useEffect } from 'react';
import { multipleGroupBy } from '@/utils/utils';
import dayjs from 'dayjs';
import React from 'react';
import Arrow from '@/assets/images/arrow.svg';
import { TPagination } from '@/types';
import Item from 'antd/es/list/Item';

const Archive = () => {
  const [notes, setNotes] = useState<any>({});
  const [pagination, setPagination] = useState<Partial<TPagination>>({});
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [prevPage, setPrevPage] = useState<number[]>([1,2,3]);
  const [nextPage, setNextPage] = useState<number[]>([])
  const fetchData = async () => {
    const res = (await httpRequest.post(`/note/archiveNote`, {
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
      setNextPage([total - 2, total - 1, total]);
      const list = res.data.result.map(item => {
        const ym = dayjs(item.push_date);
        return {
          ...item,
          new_push_date: item.push_date.slice(0, 10),
          group_month: `${ym.year()}年${ym.month()}月`
        }
      })
      const result = multipleGroupBy(list, 'group_month');
      setNotes(result)
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  const onPrevPage = (page: number) => {
    if (page > 1) {
      let prevList = [page - 1, page, page + 1];
      if (page + 1 === nextPage[0]) {
        prevList =[page - 1, page]
      }
      setPrevPage(prevList)
      setCurrentPage(page)
    }
  }

  const onNextPage = (page: number) => {
    const total = pagination.total as number;
    if (page <= total) {
       let prevList = [page - 1, page, page + 1];
       if (page === nextPage[0]) {
        prevList = [page -1]
       }
      setPrevPage(prevList)
      setCurrentPage(page)
    }
  }
  const onPrevArrowPage = () => {
    if (currentPage - 1 < nextPage[0]) {
      onPrevPage(currentPage - 1)
    } else {
      onNextPage(currentPage - 1)
    }
  }
  const onNextArrowPage = () => {
    if (currentPage + 1 < nextPage[0]) {
      onPrevPage(currentPage + 1)
    } else {
      onNextPage(currentPage + 1)
    }
  }
  return <div className="root">
    <div className="mb-10 flex gap-x-10 mt-16">
      <h1 className="text-3xl font-medium tracking-tight text-neutral-950 lg:text-4xl">所有文章</h1>
    </div>
    <div className='flex flex-col gap-y-4'>
      {
        Object.keys(notes).map((noteKey) => {
          const noteList = notes[noteKey];
          return <React.Fragment key={noteKey}>
            {
              noteList.map((note, index) => {
                const {
                  new_push_date,
                  title,
                  note_id,
                  tag_id
                } = note;
                return <div key={note_id} className="lg:flex">
                  <div className="mr-10 w-32">
                    <p className="mb-3 text-lg font-medium lg:mb-0">
                      {
                        index === 0 ? noteKey : ''
                      }
                    </p>
                  </div>
                  <div>
                    <div className="lg:flex">
                      <div className="flex">
                        <p className="w-24 text-sm text-gray-700 lg:text-base">{new_push_date}</p>
                        <div className=" text-sm text-gray-400 lg:hidden">科技与职涯思维</div>
                      </div>
                      <a className="text-base font-medium text-gray-900 underline underline-offset-2 hover:text-gray-600 lg:ml-3">
                        {title}
                      </a>
                    </div>
                    <div className="hidden text-sm font-medium text-gray-400 lg:block">
                      {tag_id}
                    </div>
                  </div>
                </div>
              })
            }
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
    <div className='my-16 text-center select-none'>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-xs cursor-pointer">
        <span
          onClick={onPrevArrowPage}
          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <img src={Arrow} className='w-5 h-5' />
        </span>
        <span className={`relative items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0 ${currentPage >= 4?'inline-flex':'hidden'}`}>
          1
        </span>
        <span className={`relative items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0 ${currentPage >= 3?'inline-flex':'hidden'}`}>
          ...
        </span>
        {
         currentPage - 1 < nextPage[0] && prevPage.map((item) => {
            return <span
              onClick={() => onPrevPage(item)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0 ${currentPage === item?'bg-indigo-600 text-white':'text-gray-900'}`}
            >
              {item}
            </span>
          })
        }
        <span className={`relative items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0 ${currentPage + 2 < nextPage[0]?'inline-flex':'hidden'}`}>
          ...
        </span>
        {
          nextPage.map((item) => {
            return <span
              onClick={() => onNextPage(item)}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0 ${currentPage === item?'bg-indigo-600 text-white':'text-gray-900'}`}
            >
              {item}
            </span>
          })
        }
        <span
          onClick={onNextArrowPage}
          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >
          <img src={Arrow} className='w-5 h-5 rotate-180' />
        </span>
      </nav>
    </div>
  </div>
}

export default Archive