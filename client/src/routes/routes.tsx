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
const Talk = React.lazy(() => import("@/pages/talk"));
const Category = React.lazy(() => import("@/pages/category"));
const Discuss = React.lazy(() => import("@/pages/discuss"));
const Signin = React.lazy(() => import("@/pages/signin"));
const ResetPwd = React.lazy(() => import("@/pages/resetPwd"));
const Signup = React.lazy(() => import("@/pages/signup"));

const Archive = React.lazy(() => import("@/pages/archive"));
const Categorys = React.lazy(() => import("@/pages/categorys"));
const Tags = React.lazy(() => import("@/pages/tags"));
const Blog = React.lazy(() => import("@/pages/blog"));
const CaseStudies = React.lazy(() => import("@/pages/caseStudies"));
const Talks = React.lazy(() => import("@/pages/talks"));
const Notes = React.lazy(() => import("@/pages/notes"));

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
    path: '/talk',
    loader: protectedLoader,
    element: <Talk />
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
        path: '/archive',
        element: <Archive />
      },
      {
        path: '/categorys',
        element: <Categorys />
      },
            {
        path: '/tags',
        element: <Tags />
      },
            {
        path: '/blog',
        element: <Blog />
      },
            {
        path: '/case-studies',
        element: <CaseStudies />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/talks',
        element: <Talks />
      },
      {
        path: ':categoryId',
        element: <Notes />
      },
      {
        path: '/',
        element: <Home />
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