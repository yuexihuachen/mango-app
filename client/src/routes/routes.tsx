import React from "react";
import {
  createBrowserRouter,
  redirect
} from "react-router";
import Cookies from 'js-cookie';

import { Index } from "@/pages/index";
import { Layout } from "@/pages/layout";

const Home = React.lazy(() => import("@/pages/home"));
const About = React.lazy(() => import("@/pages/about"));
const Note = React.lazy(() => import("@/pages/note"));
const Tag = React.lazy(() => import("@/pages/tag"));
const Category = React.lazy(() => import("@/pages/category"));
const Discuss = React.lazy(() => import("@/pages/discuss"));
const Signin = React.lazy(() => import("@/pages/signin"));
const ResetPwd = React.lazy(() => import("@/pages/resetPwd"));
const Signup = React.lazy(() => import("@/pages/signup"));

const userRouter = [{
  path: '/signin', // 登录
  loader() {
    if (Cookies.get('at')) {
      return redirect("/note");
    }
    return null;
  },
  element: <Signin />
},
{
  path: '/signup', // 注册
  element: <Signup />
},
{
  path: '/forget-pwd', // 忘记密码
  element: <ResetPwd />
}];
// 管理后台
const noteRouter = [
  {
    path: '/note',
    loader: protectedLoader,
    element: <Note />
  },
  {
    path: 'category',
    loader: protectedLoader,
    element: <Category />
  },
  {
    path: '/tag',
    loader: protectedLoader,
    element: <Tag />
  },
  {
    path: 'discuss',
    loader: protectedLoader,
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
    ]
  },
    {
    path: '/',
    element: <Layout />,
    children: [
      ...userRouter,
    ]
  }
]);

async function protectedLoader() {
  if (!Cookies.get('at')) {
    return redirect("/signin");
  }
  return null;
}

export {
  router
} 