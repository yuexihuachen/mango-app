import { useParams } from "react-router";
import Sidebar from "~/components/sidebar/sidebar";
import { useEffect, useState  } from 'react';
import { useAppDispatch } from "~/hooks";
import { selectedNote } from "~/features/selected-note/selectedNoteSlice";
import Main from "~/components/main/main";
import httpRequest from "~/lib/httpClient";

const Layout = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const id = params?.categoryId?.slice(6) || '1';
  const [notes, setNotes] = useState([])

  useEffect(() => {
    if (id) {
      httpRequest.post('/note/find', {
        category: id,
      }).then((res: any) => {
        if (res.code === 0) {
          dispatch(selectedNote(res.data[0]));
          setNotes(res.data)
        }
      })

    }
  }, [id]);
  
  return (
    <>
    <div className="lg:block fixed w-[20.2666rem] inset-0 z-20  top-[4rem] left-[max(0px,calc(50%-48rem))] right-auto pb-10 pl-8 pr-6 overflow-y-auto border-r-1 border-gray-50">
      <Sidebar {...{notes}} />
    </div>
    <div className="lg:pl-[20.8rem]">
      <main className="relative z-20 max-w-3xl pt-10 xl:max-w-none  h-[calc(100vh-64px)] overflow-y-auto">
        <Main />
      </main>
    </div>
  </>
  );
};

export default Layout;
