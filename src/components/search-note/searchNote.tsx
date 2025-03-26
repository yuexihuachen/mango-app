import React, { useEffect, useState } from 'react';
import httpRequest from '~/lib/httpClient';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { Response, Note, SearchNoteBody } from '~/types';
import { searchNote, selectedNote } from '~/features/note/noteSlice';
import useFetch from '~/hooks/useFetch';
import { groupBy } from '~/utils/utils';
import { updateStatus } from '~/features/global/globalSlice';

function SearchNote() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.note.notes);
  const { data: categories, loading } = useFetch('/category/find');
  const [title, setTitle] = useState<string>('');
  const [category, setCagetory] = useState<string>('');
  const [published, setPublished] = useState<number>(-1);
  const [objCategory, setObjCategory] = useState({});

  useEffect(() => {
    if (categories?.data) {
      setObjCategory(groupBy(categories.data, 'id'));
    }
  }, [loading]);

  const searchPosts = async () => {
    let body: Partial<SearchNoteBody> = {};
    if (title.length) {
      body.title = title;
    }
    if (category.length) {
      body.category = category;
    }
    if (published > -1) {
      body.published = published;
    }
    const data = (await httpRequest.post('/note/find', body)) as Response<
      Note[]
    >;
    if (data?.code === 0) {
      dispatch(searchNote(data.data));
    }
  };

  const deleteNote = async (note: Note) => {};

  const editNote = async (note: Note) => {
    dispatch(selectedNote(note));
    dispatch(
      updateStatus({
        tab: '4',
      }),
    );
  };

  const viewNote = async (note: Note) => {};

  return (
    <>
      <div className="z-20 grid grid-cols-4 mx-4 text-base bg-white gap-y-4">
        <div className="inline-grid items-end h-24 p-3">
          <div className="sm:col-span-3">
            <div
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              标题
            </div>
            <div className="mt-2">
              <input
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                autoComplete="given-name"
                value={title}
                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="inline-grid items-end h-24 p-3">
          <div
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            类型
          </div>
          <div className="grid mt-2">
            <select
              name="category"
              autoComplete="category-name"
              value={category}
              onChange={(e) => setCagetory(e.target.value)}
              className="px-3 appearance-none row-start-1 col-start-1 block w-full text-base max-w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            >
              {!loading &&
                categories.data.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.alias}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="inline-grid items-end h-24 p-3">
          <div
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            是否发布
          </div>
          <div className="grid mt-2">
            <select
              name="publish"
              autoComplete="publish-name"
              value={published}
              onChange={(e) => setPublished(parseInt(e.target.value, 10))}
              className="px-3 appearance-none row-start-1 col-start-1 block w-full text-base max-w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            >
              <option value={-1}>全部</option>
              <option value={1}>已发布</option>
              <option value={0}>未发布</option>
            </select>
          </div>
        </div>
        <div className="inline-grid items-end h-24 p-3">
          <button
            type="button"
            onClick={searchPosts}
            className="w-full py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            搜索
          </button>
        </div>
        <div className="p-3 border-b">标题</div>
        <div className="p-3 border-b">类别</div>
        <div className="p-3 border-b">是否发布</div>
        <div className="p-3 border-b">操作</div>
      </div>
      <div className="grid grid-cols-4 ml-4 mr-4 text-base pb-11">
        {notes.map((note) => {
          const category = objCategory[note.category]?.alias;
          return (
            <React.Fragment key={note.id}>
              <div className="px-3 py-6 border-b">{note.title}</div>
              <div className="px-3 py-6 border-b">{category}</div>
              <div className="px-3 py-6 border-b">
                {note.published === '1' ? '是' : '否'}
              </div>
              <div className="px-3 py-6 border-b cursor-pointer">
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
        })}
      </div>
    </>
  );
}

export default SearchNote;
