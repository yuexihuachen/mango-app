
import { useState } from "react"
import Select from "../select/select";

const items = [{
  id: -1,
  name: '全部'
}, {
  id: 0,
  name: '未发布'
}];

const pushItems = [{
  id: -1,
  name: '全部'
}, {
  id: 0,
  name: '未发布'
}, {
  id: 1,
  name: '已发布'
}]

const NoteList = () => {
  const [category, setCategory] = useState(1);
  const [isPush, setIsPush] = useState(-1);
  const onSelectedValue = (value: number) => {
    setCategory(value)
  }
  const onPushValue = (value: number) => {
    setIsPush(value)
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
            autoComplete="given-name"
            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="inline-grid items-end pr-3">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          类型
        </div>
        <div className="grid mt-2">
          <Select {...{ onSelectedValue, items, value: category }} />
        </div>
      </div>
      <div className="inline-grid items-end h-24 pr-3">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          标签
        </div>
        <div className="grid mt-2">
          <Select {...{ onSelectedValue, items, value: category }} />
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
  </>
}

export default NoteList