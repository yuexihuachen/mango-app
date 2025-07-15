import { Link, Outlet } from "react-router";

import Logo from '../assets/images/logo.svg'

const Index = () => {
  return <div className="w-full">
    <div className="fixed top-0 w-full shadow-md bg-white">
    <div className="flex gap-4 px-6 items-center h-16 max-w-10xl">
      <div className="inline-flex items-center gap-4 cursor-pointer">
        <Link to={'/'}><img src={Logo} className="h-6" /></Link>
        <span className="font-bold">技术茶馆</span>
      </div>
      <div className="flex text-sm ml-8 gap-6 cursor-pointer flex-auto">
         <Link to={'/'}>首页</Link>
        <Link to={'/home'}>归档</Link>
        <Link to={'/about'}>类别</Link>
        <Link to={'/hello'}>标签</Link>
        <Link to={'/111'}>博客</Link>
        <Link to={'/home'}>研究案例</Link>
        <Link to={'/about'}>微说</Link>
        <Link to={'/about'}>关于</Link>
      </div>
      <div className="flex">
        <div className="relative cursor-pointer"><div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"><img alt="search Logo" width="16" height="16" src="/search.svg" /></div><input className="block w-full rounded-3xl border-0 py-1.5 pl-10 pr-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700" placeholder="Search" type="text" /></div>
      </div>
      <div className="flex ml-6 text-sm">
        <Link to={'/note'} className="cursor-pointer">登录</Link>
      </div>
    </div>
    </div>
    <div className="mt-16">
      <Outlet />
    </div>
  </div>
}

export {
  Index
}