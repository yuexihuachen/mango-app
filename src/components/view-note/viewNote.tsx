import React, { useState, useRef, useEffect } from 'react';
import useFetch from '~/hooks/useFetch';
import * as marked from 'marked';
import { useAppSelector } from '~/hooks';

function ViewNote() {
  const { data } = useFetch('/category/find');
  const markdownRef = useRef(null);
  const [category, setCagetory] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [published, setPublished] = useState<number>(0);
  const currentNote = useAppSelector(state => state.note.currentNote);

  useEffect(() => {
    if (currentNote) {
        setTitle(currentNote.title)
        setCagetory(currentNote.category || '0')
        const deContent = decodeURIComponent(currentNote.content as string)
        markdownRef.current.innerHTML = marked.parse(deContent);
        setPublished(currentNote.published)
    }
  }, [currentNote])

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
                disabled
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
              disabled
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
        <div className={`p-3 col-span-2`}>
          <div className="p-4 shadow-xl">
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
                disabled
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
      </div>
    </>
  );
}

export default ViewNote;
