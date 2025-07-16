import * as marked from 'marked';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { useState, useRef, useCallback, useEffect } from 'react';
import httpRequest from '@/lib/httpClient';
import { Response } from '@/types';
import { CategoryItem } from '@/types/category';
import { message } from 'antd';
import { TagItem } from '@/types/tag';

import Select from "../select/select";

type Item = {
  id: number;
  name: string;
}

const EditNote = () => {
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedTag, setSelectedTag] = useState(1);

  const [categoryList, setCategoryList] = useState<Item[]>([]);
  const [tagList, setTagList] = useState<Item[]>([]);
  const markdownRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>('');

  const [published, setPublished] = useState<boolean>(false);

  const onChange = useCallback((val: string) => {
    if (markdownRef.current) {
      setContent(val);
      if (markdownRef.current) {
        markdownRef.current.innerHTML = marked.parse(val) as string;
      }
    }
  }, []);

    const fetchCategoryData = async () => {
      const res = (await httpRequest.post(`/auth/category/find`,{})) as Response<any>;
      if (res?.code === 0) {
        const category: Item[]  = res.data.map((ca: CategoryItem) => ({
          id: ca.category_id,
          name: ca.category_alias
        }))
        setCategoryList([...category])
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
        setTagList([...tag])
      } else {
        message.error('请求失败')
      }
  };

  useEffect(() => {
    fetchCategoryData();
    fetchTagData()
  }, [])

  const onCategoryValue = (value: string) => {
    setSelectedCategory(parseInt(value, 10))
  }

  const onTagValue = (value: string) => {
    setSelectedTag(parseInt(value, 10))
  }

  const handleData = () => {

  }
  return <>
    <div className="z-20 grid grid-cols-[1fr_1fr_1fr_auto_1fr] text-base bg-white gap-y-4">
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
      <div className="inline-grid items-end h-24 pr-3">
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
          发布
        </div>
        <div className="grid mt-2">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-9 h-9 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600 accent-indigo-500"
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
    <div className="grid grid-cols-2 h-[720px] mb-8 gap-4 mt-4 text-4xl">
      <div className="py-3">
        <div
          className="relative
            h-[720px]
            overflow-y-scroll
            overscroll-contain
            text-base"
            >
          <CodeMirror
            value={content}
            height="auto"
            theme={'dark'}
            minHeight="720px"
            extensions={[EditorView.lineWrapping]}
            basicSetup={{ foldGutter: false }}
            onChange={onChange}
          />
        </div>
      </div>
      <div className={`p-3`}>
        <div className="h-[720px] overflow-y-scroll overscroll-contain">
          <div
            className={`
                  prose
                  prose-slate
                  prose-h2:mt-0
                  prose-h3:mt-0
                  prose-h4:mt-0
                  max-w-full
                  prose-code:rounded-md
                  prose-code:before:content-none 
                  prose-code:after:content-none
                  prose-p:before:content-none 
                  prose-p:after:content-none
                  prose-hr:my-4
                `}
            ref={markdownRef}
          ></div>
        </div>
      </div>

    </div>
  </>
}
export default EditNote