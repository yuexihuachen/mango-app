import httpRequest from '@/lib/httpClient';
import { Response, NoteItem } from '@/types';
import { useState, useEffect } from 'react';
import { multipleGroupBy } from '@/utils/utils';
import dayjs from 'dayjs';
import React from 'react';

const Archive = () => {
  const [notes, setNotes] = useState<any>({});
  const fetchData = async () => {
    const res = (await httpRequest.post(`/note/archiveNote`, {
      pageSize: 30,
      pageIndex: 1
    })) as Response<any>;
    if (res?.code === 0) {
      const list = res.data.map(item => {
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
                  index === 0?noteKey:''
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
  </div>
}

export default Archive