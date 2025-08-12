import { Link, Outlet } from "react-router";
import { useLocation } from "react-router";
import Logo from '../assets/images/logo.svg'

const links = [
    {
        "url": "/",
        "name": "首页"
    },
    {
        "url": "/archive",
        "name": "归档"
    },
    {
        "url": "/categorys",
        "name": "类别"
    },
    {
        "url": "/tags",
        "name": "标签"
    },
    {
        "url": "/blog",
        "name": "博客"
    },
        {
        "url": "/case-studies",
        "name": "研究案例"
    },
        {
        "url": "/talks",
        "name": "微说"
    },
        {
        "url": "/about",
        "name": "关于"
    }
];

const Index = () => {
  const {pathname} = useLocation();
  return <div className="w-full">
    <div className="fixed top-0 w-full shadow-md bg-white">
      <div className="mx-auto flex gap-4 px-6 items-center h-16 max-w-8xl">
        <div className="inline-flex items-center gap-4 cursor-pointer">
          <Link to={'/'}><img src={Logo} className="h-6" /></Link>
          <span className="font-bold">茶馆伙计</span>
        </div>
        <div className="flex text-sm ml-8 gap-6 h-16 items-start cursor-pointer  flex-auto">
          {
            links.map((link) => {
              const {
                url,
                name
              } = link;
              return <Link key={url} className={`item item-hover ${pathname == url?'item-selected':''}`} to={url}>{name}</Link>
            })
          } 
        </div>
        <div className="flex">
          <div className="relative cursor-pointer"><div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"><img alt="search Logo" width="16" height="16" src="/search.svg" /></div><input className="block w-full rounded-3xl border-0 py-1.5 pl-10 pr-4 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700" placeholder="搜索文章" type="text" /></div>
        </div>
        {/* <div className="flex ml-6 text-sm">
          <Link to={'/note'} className="cursor-pointer">登录</Link>
        </div> */}
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