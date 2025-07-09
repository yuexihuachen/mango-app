

const TagList = () => {
  return <>
    <div className="z-20 grid grid-cols-4 text-base bg-white gap-y-4">
      <div className="p-3 border-b border-gray-200">标签Id</div>
      <div className="p-3 border-b border-gray-200">标签名称</div>
      <div className="p-3 border-b border-gray-200">创建时间</div>
      <div className="p-3 border-b border-gray-200">
        <button
          type="button"
          className="px-12 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          搜索
        </button>
      </div>
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

export default TagList