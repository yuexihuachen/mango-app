import * as marked from 'marked';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { useState, useRef, useCallback, useEffect } from 'react';
import httpRequest from '@/lib/httpClient';
import { NoteServerItem, Response } from '@/types';
import { CategoryItem } from '@/types/category';
import { message } from 'antd';
import { TagItem } from '@/types/tag';
import dayjs from 'dayjs';
import Select from "../select/select";
import { useAppSelector } from '@/hooks';

type Item = {
  id: number;
  name: string;
}

type Props = {
  tagList: TagItem[];
  categoryList: CategoryItem[];
}

const EditNote = (props: Props) => {
  const {
    tagList: tags,
    categoryList: categorys
  } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedTag, setSelectedTag] = useState(1);
  const [published, setPublished] = useState<boolean>(false);

  const selectedNote = useAppSelector(state => state.note.selectedNote);

  const [categoryList, setCategoryList] = useState<Item[]>([]);
  const [tagList, setTagList] = useState<Item[]>([]);
  const markdownRef = useRef<HTMLDivElement>(null);
  const [messageApi, contextHolder] = message.useMessage();

  const onChange = useCallback((val: string) => {
    if (markdownRef.current) {
      const value = marked.parse(val) as string;
      setContent(val);
      markdownRef.current.innerHTML = value;
    }
  }, []);

  useEffect(() => {
    if (categorys.length) {
      const category: Item[] = categorys.map((ca: CategoryItem) => ({
        id: ca.category_id,
        name: ca.category_alias
      }))
      setCategoryList([...category]);
      setSelectedCategory(category[0].id)
    }

    if (tags.length) {
      const tag: Item[] = tags.map((tag: TagItem) => ({
        id: tag.tag_id,
        name: tag.tag_name
      }))
      setTagList([...tag]);
      setSelectedTag(tag[0].id)
    }
  }, [tags, categorys])

  useEffect(() => {
    if (selectedNote?.noteId) {
      setTitle(selectedNote?.title || '');
      setSelectedCategory(selectedNote?.categoryId || 0);
      setSelectedTag(selectedNote.tagId || 0)
      setPublished(!!selectedNote.isPush)
      httpRequest.post(`/auth/note/find`, {
        id: selectedNote?.noteId
      }).then((res) => {
        const result = res as unknown as Response<NoteServerItem[]>;
        if (result?.code === 0) {
          const note = result.data[0];
          if (markdownRef.current) {
            setContent(note?.mark_content ? decodeURIComponent(note.mark_content as string) : '');

            markdownRef.current.innerHTML = note?.content ? marked.parse(decodeURIComponent(note.content as string)) as string : '';
          }
        }
      })
    } else {
      setTitle('');
      setSelectedCategory(categoryList[0]?.id);
      setSelectedTag(tagList[0]?.id)
      setPublished(false)
      setContent('')
      markdownRef.current && (markdownRef.current.innerHTML = '');
    }
  }, [selectedNote])

  const onCategoryValue = (value: string) => {
    setSelectedCategory(parseInt(value, 10))
  }

  const onTagValue = (value: string) => {
    setSelectedTag(parseInt(value, 10))
  }

  const handleData = async () => {
    if (!title || !selectedCategory || !selectedTag || !content) {
      messageApi.warning('请输入有效的数据');
      return false;
    }
    const createDate = dayjs().format();
    const isId = selectedNote?.noteId;
    let res;
    if (isId) {
      res = (await httpRequest.post(`/auth/note/update`, {
        id: isId,
        title,
        content: encodeURIComponent(marked.parse(content) as string),
        markContent: encodeURIComponent(content),
        isPush: published ? 1 : 0,
        categoryId: selectedCategory,
        tagId: selectedTag,
        updateDate: createDate
      })) as Response<{}>;
    } else {
      res = (await httpRequest.post(`/auth/note/create`, {
        title,
        content: encodeURIComponent(marked.parse(content) as string),
        markContent: encodeURIComponent(content),
        isPush: published ? 1 : 0,
        categoryId: selectedCategory,
        tagId: selectedTag,
        createDate
      })) as Response<{}>;
    }

    if (res?.code !== 0) {
      messageApi.success(`${isId ? '更新' : '新增'}失败`);
    } else {
      messageApi.success(`${isId ? '更新' : '新增'}成功`)
    }

  }
  return <>
    {contextHolder}
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
            value: selectedCategory
          }} />
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
            value: selectedTag
          }} />
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
                  max-w-full
                  prose-code:rounded-md
                  prose-a:text-sky-600
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