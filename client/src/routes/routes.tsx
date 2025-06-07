import React from "react";
import {
  createBrowserRouter
} from "react-router";

import { Index } from "@/pages/index";

const Home = React.lazy(() => import("@/pages/home"));
const About = React.lazy(() => import("@/pages/about"));

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
       }
    ]
  }
]);

export {
  router
} 