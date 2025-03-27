import { useEffect, useRef } from 'react';
import { marked } from 'marked';
import { useAppSelector } from '~/hooks';
import MainSkeleton from '../main-skeleton/mainSkeleton';

export default function Main() {
  const markdownRef = useRef<HTMLDivElement>(null);
  const curNote = useAppSelector((state) => state.selectedNote.selectedNote);

  useEffect(() => {
    let content = ``;
    if (curNote?.content) {
      content = curNote.content as string;
    }
    const deContent = decodeURIComponent(content);
    markdownRef.current.innerHTML = marked.parse(deContent);
  }, [curNote]);
  return (
    <>
      <div
        className={`prose prose-slate prose-h2:mt-0 prose-h3:mt-0 prose-h4:mt-0 max-w-full prose-code:rounded-md prose-code:before:content-none  prose-code:after:content-none prose-p:before:content-none prose-p:after:content-none prose-hr:my-4`}
        ref={markdownRef}>
      </div>
      {
        !curNote?.content && <MainSkeleton />
      }
    </>
  );
}
