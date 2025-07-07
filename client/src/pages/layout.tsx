import { Link, Outlet } from "react-router";

import Logo from '../assets/images/logo.svg'

const Layout = () => {
  return <div className="w-full">
    <div className="fixed top-0 w-full z-50 bg-white">
      <div className="flex gap-4 px-6 border-b-header-border items-center h-12 bg-white max-w-10xl border-b">
        <div className="inline-flex items-center gap-4 cursor-pointer">
          <Link to={'/'}><img src={Logo} className="h-6" /></Link>
          <span className="font-bold">管理后台</span>
        </div>
        <div className="flex ml-8 gap-6 cursor-pointer flex-auto">
          <Link to={'/note'}>文章</Link>
          <Link to={'/category'}>类别</Link>
          <Link to={'/tag'}>标签</Link>
          <Link to={'/discuss'}>评论</Link>
        </div>
        <div className="flex ml-6">
          <div className="cursor-pointer">登录</div>
        </div>
      </div>
    </div>
    <div className="mt-12">
      <Outlet />
    </div>
  </div>
}

export {
  Layout
}