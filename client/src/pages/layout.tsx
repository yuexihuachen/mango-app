import { Link, Outlet } from "react-router";

import Logo from '../assets/images/logo.svg'

const Layout = () => {
  return <div className="w-full">
    <div className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="flex gap-4 px-6 items-center h-16 max-w-10xl">
        <div className="inline-flex items-center gap-4 cursor-pointer">
          <Link to={'/'}><img src={Logo} className="h-6" /></Link>
          <span className="font-black">ExplainThis</span>
        </div>
        <div className="flex text-sm ml-8 gap-6 cursor-pointer flex-auto">
          <Link to={'/note'}>文章</Link>
          <Link to={'/category'}>类别</Link>
          <Link to={'/tag'}>标签</Link>
           <Link to={'/talk'}>微说</Link>
          <Link to={'/discuss'}>评论</Link>
        </div>
        <div className="flex ml-6 text-sm items-center">
          <Link to={'/signin'} className="cursor-pointer">登录</Link>
          <div className="h-3 w-[0.5px] bg-gray-300 mx-4"></div>
          <Link to={'/signup'} className="cursor-pointer">注册</Link>
        </div>
      </div>
    </div>
    <div className="mt-16">
      <Outlet />
    </div>
  </div>
}

export {
  Layout
}