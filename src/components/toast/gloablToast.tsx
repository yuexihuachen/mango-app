import { useAppDispatch } from '~/hooks';
import {useEffect, useRef} from 'react';
import { useAppSelector } from '~/hooks';
import { updateStatus } from '~/features/global/globalSlice';

export default function Toast() {
  const dispatch = useAppDispatch();
  const { content, show } = useAppSelector(state => state.global.toast);
  const timeoutRef = useRef(0)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      onCancel()
    }, 3000);
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [show])

  const onCancel = () => {
    dispatch(updateStatus({
      toast: {
        content: '',
        show: false
      }
    }))
  }

  return (
    <>
    <div className={`z-50 fixed inset-0 w-screen pt-6 overflow-y-auto ${show?'':'hidden'}`} >
      <div className="grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center p-8">
      <div className={`animate-[var(--animate-toast)] grid min-w-2xs max-w-md grid-cols-[90%_10%] items-center row-start-2 p-4 transition duration-100 bg-white rounded-lg shadow-lg ring-1 ring-zinc-950/10 forced-colors:outline will-change-transform`}>
          <h2 className="font-semibold text-left text-gray-600 text-sm/6 text-wrap">
            {content}
          </h2>
          <img onClick={onCancel} className="w-4 h-4 cursor-pointer" src={`/close.svg`} alt="close" />
        </div>
      </div>
    </div>
    </>
  );
}
