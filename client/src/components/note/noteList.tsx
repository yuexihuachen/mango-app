
import { useEffect, useState } from "react"
import httpRequest from '@/lib/httpClient';
import { Response } from '@/types';
import { CategoryItem } from '@/types/category';
import { message, Modal } from 'antd';
import { TagItem } from '@/types/tag';

import Select from "../select/select";

const firstItem = {id: 0, name: '全部'};

const pushItems = [firstItem, {
  id: 1,
  name: '未发布'
}, {
  id: 2,
  name: '已发布'
}]

type Item = {
  id: number;
  name: string;
}

const NoteList = () => {
  const [categoryList, setCategoryList] = useState<Item[]>([]);
  const [tagList, setTagList] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedTag, setSelectedTag] = useState(1);
  const [isPush, setIsPush] = useState(-1);

  const onCategoryValue = (value: string) => {
    setSelectedCategory(parseInt(value, 10))
  }

  const onTagValue = (value: string) => {
    setSelectedTag(parseInt(value, 10))
  }
  const onPushValue = (value: number) => {
    setIsPush(value)
  }
  const fetchCategoryData = async () => {
      const res = (await httpRequest.post(`/auth/category/find`,{})) as Response<any>;
      if (res?.code === 0) {
        const category: Item[]  = res.data.map((ca: CategoryItem) => ({
          id: ca.category_id,
          name: ca.category_alias
        }))
        setCategoryList([firstItem, ...category])
      } else {
        message.error('请求失败')
      }
  };

  const fetchTagData = async () => {
      const res = (await httpRequest.post(`/auth/tag/find`,{})) as Response<any>;
      if (res?.code === 0) {
        const tag: Item[]  = res.data.map((tag: TagItem) => ({
          id: tag.tag_id,
          name: tag.tag_name
        }))
        setTagList([firstItem, ...tag])
      } else {
        message.error('请求失败')
      }
  };

  useEffect(() => {
    fetchCategoryData();
    fetchTagData()
  }, [])

  const handleOk = async () => {

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return <>
    <div className="z-20 grid grid-cols-5 text-base bg-white gap-y-4">
      <div className="inline-grid items-end h-24 pr-3">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          标题
        </div>
        <div className="mt-2">
          <input
            name="title"
            type="text"
            value={title || ''}
            onChange={e => setTitle(e.target.value)}
            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="inline-grid items-end pr-3">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          类型
        </div>
        <div className="grid mt-2">
          <Select {...{ 
            onSelectedValue: onCategoryValue, 
            items: categoryList, 
            value: selectedCategory }} />
        </div>
      </div>
      <div className="inline-grid items-end h-24 pr-3">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          标签
        </div>
        <div className="grid mt-2">
          <Select {...{ 
            onSelectedValue: onTagValue, 
            items: tagList, 
            value: selectedTag }} />
        </div>
      </div>
      <div className="inline-grid items-end h-24 pr-3">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          是否发布
        </div>
        <div className="grid mt-2">
          <Select {...{ onSelectedValue: onPushValue, items: pushItems, value: isPush }} />
        </div>
      </div>
      <div className="inline-grid items-end h-24">
        <button
          type="button"
          className="px-12 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          搜索
        </button>
      </div>
      <div className="p-3 border-b border-gray-200">标题</div>
      <div className="p-3 border-b border-gray-200">类别</div>
      <div className="p-3 border-b border-gray-200">标签</div>
      <div className="p-3 border-b border-gray-200">是否发布</div>
      <div className="p-3 border-b border-gray-200">操作</div>
    </div>
    <div className="grid grid-cols-4 text-base pb-11">
      {/* {notes.map((note: Note) => {
          const category = (objCategory[note.category] as unknown as Category)?.alias;
          return (
            <React.Fragment key={note.id}>
              <div className="px-3 py-6 border-b border-gray-200">
                {note.title}
              </div>
              <div className="px-3 py-6 border-b border-gray-200">
                {category}
              </div>
              <div className="px-3 py-6 border-b border-gray-200">
                {note.published == 1 ? '是' : '否'}
              </div>
              <div className="px-3 py-6 border-b border-gray-200 cursor-pointer">
                <span className="flex items-center ml-auto font-medium text-indigo-600">
                  <span
                    onClick={() => viewNote(note)}
                    className="pointer-events-auto hover:text-indigo-500"
                  >
                    <img
                      className="w-4 h-4"
                      src={`/view.svg`}
                      alt="Your Company"
                    />
                  </span>
                  <span className="w-px h-6 mx-3 bg-slate-400/20"></span>
                  <span
                    onClick={() => editNote(note)}
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
                    onClick={() => deleteNote(note)}
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
        })} */}
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

export default NoteList