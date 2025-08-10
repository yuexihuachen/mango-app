import httpRequest from '@/lib/httpClient';
import { CategoryItem, Response } from '@/types';
import { groupBy } from '@/utils/utils';
import { message } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Tags = () => {
  const [tagList, setTagList] = useState<CategoryItem[]>([]);
  const [selectedTag, setSelectedTag] = useState<Partial<CategoryItem>>({});
  const [notes, setNotes] = useState<any[]>([]);

  const fetchData = async () => {
    const getTagInfo = httpRequest.post(`/tag/findAll`, {});
    const getGroupByTag = httpRequest.post(`/note/groupByFields`, {
      fieldName: 'tag_id'
    });

    Promise.all([getTagInfo, getGroupByTag]).then((res) => {
      const tags = res[0] as unknown as Response<CategoryItem[]>;
      const groupByTag = res[1] as unknown as Response<any>;
      if (tags?.code === 0 && groupByTag?.code === 0) {
        const groupByTagObj = groupBy(groupByTag.data, 'tag_id', 'count');
        const newTags = tags.data.map((tag) => ({
          count: groupByTagObj[tag.tag_id],
          ...tag
        }))
        setTagList(newTags)
      } else {
        message.error({
          key: 1,
          content: '请求失败'
        })
      }

    })
  };

  const fetchCategoryNote = (cid: number) => {
    httpRequest.post(`/note/findAll`, { categoryId: cid }).then((res) => {
      const response = res as unknown as Response<any>;
      if (response?.code === 0) {
        setNotes(response.data)
      } else {
        message.error({
          key: 1,
          content: '请求失败'
        })
      }
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const onTag = (tag: CategoryItem) => {
    setSelectedTag(tag)
    fetchCategoryNote(tag.category_id);
  }
  return <div className="root">
    <div className="flex my-12 gap-2">
      {
        tagList.map((tag) => {
          const {
            tag_id,
            tag_name,
            count = 0
          } = tag;
        return <div onClick={() => onTag(tag)} key={tag_id} className={`border border-gray-200 font-semibold hover:bg-indigo-600 hover:text-white cursor-pointer rounded-3xl px-4 py-2 text-sm shadow transition ${selectedTag.tag_id === tag_id?'text-white bg-indigo-600':'bg-white'}`}>
            {tag_name} ({count})
          </div>
        })
      }
    </div>
    <div className='flex flex-col gap-4'>
      {
        notes.map((note) => {
          const {
            note_id,
            title
          } = note;
          return <Link to={`/note/${note_id}`} key={note_id}>
            <div className="group flex w-full cursor-pointer list-none flex-col items-start justify-start rounded border border-slate-200 bg-white px-3 py-3 hover:shadow sm:flex-row sm:justify-between">
              <p className="min-w-0 flex-1 text-sm text-slate-800 group-hover:text-indigo-500 md:text-base">
                {title}
              </p>
              <div className="h-full w-28 font-semibold text-indigo-500 group-hover:text-indigo-600 sm:text-end md:w-32">
                查看详情
              </div>
            </div>
          </Link>
        })
      }
      <Link to="">
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

export default Tags