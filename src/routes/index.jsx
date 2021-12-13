/*
 * @Date: 2021-09-18 10:44:06
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-06 17:39:26
 * @FilePath: \cra-project-template\src\routes\index.jsx
 */

import Home from "@/views/Home";
import About from "@/views/About";
// import { RouteObject } from "react-router"

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;
