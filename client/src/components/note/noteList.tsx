
import React,{ useEffect, useState } from "react"
import httpRequest from '@/lib/httpClient';
import { NoteServerItem, Response, OptionalParams } from '@/types';
import { CategoryItem } from '@/types/category';
import { message, Modal } from 'antd';
import { TagItem, SearchParams, NoteItem } from '@/types/index';
import Select from "@/components/select/select";
import { groupBy } from "@/utils/utils";
import { useAppDispatch } from "@/hooks";
import { updateNote } from "@/features/note/noteSlice";

const firstItem = { id: 0, name: '全部' };

const pushItems = [{ id: -1, name: '全部' }, {
  id: 0,
  name: '未发布'
}, {
  id: 1,
  name: '已发布'
}]

type Item = {
  id: number;
  name: string;
}

type Props = {
  tagList: TagItem[];
  categoryList: CategoryItem[];
}

const NoteList = (props: Props) => {
  const {
    tagList: tags,
    categoryList: categorys
  } = props;
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deNote, setDeNote] = useState<Partial<NoteServerItem>>({})
  // 搜索条件值
  const [title, setTitle] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedTag, setSelectedTag] = useState(1);
  const [isPush, setIsPush] = useState(-1);
  // 搜索条件选择项
  const [noteList, setNoteList] = useState<NoteServerItem[]>([]);
  const [categoryList, setCategoryList] = useState<Item[]>([]);
  const [tagList, setTagList] = useState<Item[]>([]);

  const [categoryObj, setCategoryObj] = useState<OptionalParams>({});
  const [tagObj, setTagObj] = useState<OptionalParams>({})

  const onCategoryValue = (value: string) => {
    setSelectedCategory(parseInt(value, 10))
  }

  const onTagValue = (value: string) => {
    setSelectedTag(parseInt(value, 10))
  }
  const onPushValue = (value: number) => {
    setIsPush(value)
  }

  useEffect(() => {
    if (categorys.length) {
      const category: Item[] = categorys.map((ca: CategoryItem) => ({
        id: ca.category_id,
        name: ca.category_alias
      }))
      const categoryObj = groupBy(categorys, 'category_id','category_alias')
      setCategoryList([firstItem,...category]);
      setCategoryObj(categoryObj)
      setSelectedCategory(0)
    }

    if (tags.length) {
      const tag: Item[] = tags.map((tag: TagItem) => ({
        id: tag.tag_id,
        name: tag.tag_name
      }))
      const tagObj = groupBy(tags, 'tag_id', 'tag_name')
      setTagList([firstItem, ...tag]);
      setTagObj(tagObj)
      setSelectedTag(0)
    }
  }, [tags, categorys])

  const handleOk = async () => {
    if (deNote?.note_id) {
      const res = (await httpRequest.post(`/auth/note/delete`, { id: deNote.note_id })) as Response<any>;
      if (res?.code === 0) {
        message.success('删除成功');
        const newNoteList = noteList.filter(note => note.note_id !== deNote.note_id);
        setNoteList(newNoteList)
      } else {
        message.error('删除失败');
      }
      setIsModalOpen(false);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const searchBody = () => {
    let body: Partial<SearchParams> = {};
    if (title) {
      body.title = title;
    }
    if (isPush != -1) {
      body.isPush = isPush;
    }
    if (selectedCategory) {
      body.categoryId = selectedCategory;
    }
    if (selectedTag) {
      body.tagId = selectedTag;
    }
    return body;
  }

  const searchData = async () => {
    const body = searchBody();
    const res = (await httpRequest.post(`/auth/note/findAll`, body)) as Response<NoteItem[]>;
    if (res?.code === 0) {
      message.success({
        key: 1,
        content: '请求成功'
      })
      setNoteList(res.data as unknown as NoteServerItem[])
    } else {
      message.error({
        key: 1,
        content: '请求异常'
      })
    }
  }

  const editNote = (note: NoteServerItem) => {
    const newNote: NoteItem = {
      noteId: note.note_id,
      title: note.title,
      categoryId: note.category_id,
      tagId: note.tag_id,
      isPush: note.is_push
    }
    dispatch(updateNote({
      selectedNote: newNote,
      noteTabId: '2'
    }))
  }

  const deleteNote = (note: NoteServerItem) => {
    setDeNote(note)
    setIsModalOpen(true);
  }

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
          是否发布
        </div>
        <div className="grid mt-2">
          <Select {...{ onSelectedValue: onPushValue, items: pushItems, value: isPush }} />
        </div>
      </div>
      <div className="inline-grid items-end h-24">
        <button
          type="button"
          onClick={searchData}
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
    <div className="grid grid-cols-5 text-base pb-11">
      {noteList.map((note: NoteServerItem) => {
          const {
            note_id,
            title,
            category_id,
            tag_id,
            is_push
          } = note;
          return (
            <React.Fragment key={note_id}>
              <div className="px-3 py-6 border-b border-gray-200">
                {title}
              </div>
              <div className="px-3 py-6 border-b border-gray-200">
                {categoryObj[category_id]}
              </div>
              <div className="px-3 py-6 border-b border-gray-200">
                {tagObj[tag_id]}
              </div>
              <div className="px-3 py-6 border-b border-gray-200">
                {is_push?'已发布':'未发布'}
              </div>
              <div className="px-3 py-6 border-b border-gray-200 cursor-pointer">
                <span className="flex items-center ml-auto font-medium text-indigo-600">
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
        })}
    </div>
    <Modal
      title="确认删除当前笔记信息"
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