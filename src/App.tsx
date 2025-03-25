import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router';
import React from 'react';
import Cookies from 'js-cookie';
import Index from '~/pages/index/index.tsx';

const Signin = React.lazy(() => import("./pages/signin/signin"));
const Signup = React.lazy(() => import("./pages/signup/signup"));
const Note = React.lazy(() => import("./pages/note/note"));
const Category = React.lazy(() => import("./pages/category/category"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: '/signin',
        loader: loginLoader,
        element: <Signin />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/note',
        loader: protectedLoader,
        element: <Note />
      },
      {
        path: '/category',
        loader: protectedLoader,
        element: <Category />
      }
    ]
  }
])

async function loginLoader() {
  if (Cookies.get('at')) {
    return redirect("/note");
  }
  return null;
}

async function protectedLoader() {
  if (!Cookies.get('at')) {
    return redirect("/signin");
  }
  return null;
}

export default function App() {
  return <RouterProvider router={router} />;
}
