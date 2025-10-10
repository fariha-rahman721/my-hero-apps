import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AppDetails from '../Pages/AppDetails/AppDetails';
import AllApps from '../Pages/AllApps/AllApps';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
        {
            index: true,
            loader: ()=> fetch('/AppData.json'),
            path: '/',
            Component: Home
        },
        {
          path: '/apps',
          loader: ()=> fetch('/AppData.json'),
          Component: Apps
        },
        {
          path:'/installation',
          loader: ()=> fetch('/AppData.json'),
          Component: Installation
        },
        {
          path: '/appDetails/:id',
          loader: ()=> fetch('/AppData.json'),
          Component: AppDetails
        },
        {
          path: '/allApps',
          Component: AllApps
        },
        
    ]
  },
]);