import { Link, Outlet } from "react-router";
import { useLocation } from "react-router";
import Logo from '../assets/images/logo.svg';

const links = [
    {
        "url": "/note",
        "name": "文章"
    },
    {
        "url": "/category",
        "name": "类别"
    },
    {
        "url": "/tag",
        "name": "标签"
    },
    {
        "url": "/talk",
        "name": "微说"
    },
    {
        "url": "/discuss",
        "name": "评论"
    }
];

const Layout = () => {
  const {pathname} = useLocation();
  return <div className="w-full">
    <div className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="mx-auto flex gap-4 px-6 items-center h-16 max-w-10xl">
        <div className="inline-flex items-center gap-4 cursor-pointer">
          <Link to={'/'}><img src={Logo} className="h-6" /></Link>
          <span className="font-black">ExplainThis</span>
        </div>
        <div className="flex text-sm ml-8 gap-6 h-16 items-start cursor-pointer flex-auto">
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