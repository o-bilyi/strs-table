import { lazy } from "react";
import { RouteObject } from "react-router-dom";

import { Layout } from "../layout";
const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const NotFound = lazy(() => import("../pages/notFound"));

export enum routesMap {
  Home = "/",
  About = "/about",
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: routesMap.About,
        element: <About />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
];
