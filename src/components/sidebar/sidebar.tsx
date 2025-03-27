import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '~/hooks';
import { selectedNote } from "~/features/selected-note/selectedNoteSlice";
import SidebarSkeleton from '../sidebar-skeleton/sidebarSkeleton';

export default function Sidebar(props) {
  const { notes } = props;
  const dispatch = useAppDispatch();
  const curNote = useAppSelector(state => state.selectedNote.selectedNote)
  const [keyword, setKeywrod] = useState<string>('');

  const filterPosts = (notes) => {
    if (notes?.length) {
      const filterPost = notes.filter((note) => note.title.includes(keyword));
      return filterPost;
    }
    return [];
  };

  const onSelectedNote = (note) => {
    dispatch(selectedNote(note))
  }

  return (
    <>
      <nav id="nav" className="lg:text-sm lg:leading-6">
        <div className="sticky top-0 -ml-0.5 bg-white">
          <div className="h-6 bg-white"></div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src="/search.svg" alt="search Logo" width={16} height={16} />
            </div>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeywrod(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 pl-9 pr-20 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-700"
            />
          </div>
          <div className="shadow-md bg-gradient-to-b from-white"></div>
        </div>
        <ul>
          {filterPosts(notes).map((note) => {
            return (
              <li key={note.id} className="mt-2">
                <div
                    onClick={() => onSelectedNote(note)}
                  className={`truncate text-base px-4 py-2 rounded text-slate-700 font-medium ${
                    curNote?.id === note.id ? 'bg-blue-100' : 'hover:bg-blue-50'
                  }`}
                >
                  {note.title}
                </div>
              </li>
            );
          })}
          {
            !notes?.length && <SidebarSkeleton />
          }
        </ul>
      </nav>
    </>
  );
}
