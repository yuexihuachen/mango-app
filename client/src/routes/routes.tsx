import React from "react";
import {
  createBrowserRouter
} from "react-router";

import { Index } from "@/pages/index";

const Home = React.lazy(() => import("@/pages/home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
       {
        path: '/home',
        element: <Home />
       }
    ]
  }
]);

export {
  router
} 