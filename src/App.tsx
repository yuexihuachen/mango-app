import Header from './components/header/header';
import SideNav from './components/side-nav/side-nav';
import Content from './components/content/content';
import './App.css'
import { useState } from 'react';


type TPost = {
  categoryId: string;
  published: number;
  title: string;
  _id: string;
};

function App() {
  const [selectedPost, setSelectedPost] = useState<Partial<TPost>>({})
  return (
    <>
      <Header />
      <div className="overflow-hidden">
      <div className="px-4 m-auto max-w-screen-2xl md:px-8">
        <div className="lg:block fixed w-[20.2666rem] inset-0 z-20  top-[3.8125rem] left-[max(0px,calc(50%-48rem))] right-auto pb-10 pl-8 pr-6 overflow-y-auto">
          <SideNav {...{selectedPost,setSelectedPost}} />
        </div>
        <div className="lg:pl-[20.8rem]">
          <main className="relative z-20 max-w-3xl pt-10 xl:max-w-none  h-[calc(100vh-61px)] overflow-y-auto">
            <Content {...{selectedPost}} />
          </main>
        </div>
      </div>
    </div>
    </>
  )
}

export default App