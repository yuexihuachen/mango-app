import React, { useState, useRef, useEffect } from 'react';
import useFetch from '~/hooks/useFetch';
import * as marked from 'marked';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { updateStatus } from '~/features/global/globalSlice';
import httpRequest from '~/lib/httpClient';
import { Note, Response } from '~/types';

function EditNote() {
  const { data } = useFetch('/category/find');
  const dispatch = useAppDispatch()
  const markdownRef = useRef(null);
  const [category, setCagetory] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [published, setPublished] = useState<number>(0);
  const [content, setContent] = useState<string>('');
  const currentNote = useAppSelector(state => state.note.currentNote);
  const onChange = React.useCallback((val: string) => {
    if (markdownRef.current) {
      setContent(val);
      markdownRef.current.innerHTML = marked.parse(val) as string;
    }
  }, []);

  useEffect(() => {
    if (currentNote) {
        setTitle(currentNote.title)
        setCagetory(currentNote.category || '0')
        const deContent = decodeURIComponent(currentNote.content as string)
        setContent(deContent);
        markdownRef.current.innerHTML = marked.parse(deContent);
        setPublished(currentNote.published)
    }
  }, [currentNote])

  const savePost = async () => {
    const res: Response<Omit<Note, 'id'>> = await httpRequest.post('/auth/note/update', {
      condition: {
        id: currentNote.id
      }, 
      fields: {
        title,
        content: encodeURIComponent(content),
        category,
        published,
      }
    });
    if (res.code === 0) {
      dispatch(updateStatus({
        modal: {
          show: true,
          content: '修改成功'
        }
      }))
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 m-4 text-4xl">
        <div className="h-24 p-3">
          <div className="sm:col-span-3">
            <div
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              标题
            </div>
            <div className="mt-2">
              <input
                name="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                defaultValue={title}
                autoComplete="given-name"
                className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="h-24 p-3">
          <div
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            类型
          </div>
          <div className="grid mt-2">
            <select
              name="category"
              value={category}
              onChange={(e) => setCagetory(e.target.value)}
              autoComplete="category-name"
              className="px-3 appearance-none row-start-1 col-start-1 block w-full text-base max-w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            >
              {data && data.data.map((c) => {
                  return (
                    <option key={c.id} value={c.id}>
                      {c.alias}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div className="p-3">
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
        <div className="col-span-2 p-3">
          <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex items-center h-6">
                <input
                  type="checkbox"
                  checked={!!published}
                  onChange={(e) => setPublished(e.target.checked ? 1 : 0)}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <div
                  className="font-medium text-gray-900"
                >
                  是否发布
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 p-5">
          <button
            type="button"
            onClick={savePost}
            className="w-full py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            保存
          </button>
        </div>
      </div>
    </>
  );
}

export default EditNote;
