import React from "react";
import {
  createBrowserRouter
} from "react-router";

import { Index } from "@/pages/index";
import { Layout } from "@/pages/layout";

const Home = React.lazy(() => import("@/pages/home"));
const About = React.lazy(() => import("@/pages/about"));
const Note = React.lazy(() => import("@/pages/note"));
const Tag = React.lazy(() => import("@/pages/tag"));
const Category = React.lazy(() => import("@/pages/category"));
const Discuss = React.lazy(() => import("@/pages/discuss"));

const userRouter = [{
  path: '/signin', // 登录
  element: <About />
},
{
  path: '/signup', // 注册
  element: <About />
},
{
  path: '/forget-pwd', // 忘记密码
  element: <About />
}];
// 管理后台
const noteRouter = [
  {
    path: '/note',
    element: <Note />
  },
  {
    path: 'category',
    element: <Category />
  },
  {
    path: '/tag',
    element: <Tag />
  },
  {
    path: 'discuss',
    element: <Discuss />
  }
]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: ':categoryId',
        element: <Home />
      },
      {
        path: '/',
        element: <About />
      }
    ]
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      ...noteRouter,
      ...userRouter,
    ]
  }
]);

export {
  router
} 