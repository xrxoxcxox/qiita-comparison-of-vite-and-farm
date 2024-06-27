import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CssBaseline } from '@mui/material';
import Page1 from './Page1.tsx';
import Page2 from './Page2.tsx';
import Page3 from './Page3.tsx';
import Page4 from './Page4.tsx';
import Page5 from './Page5.tsx';
import Page6 from './Page6.tsx';
import Page7 from './Page7.tsx';
import Page8 from './Page8.tsx';
import Page9 from './Page9.tsx';
import Page10 from './Page10.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/page1",
    element: <Page1 />,
  },
  {
    path: "/page2",
    element: <Page2 />,
  },
  {
    path: "/page3",
    element: <Page3 />,
  },
  {
    path: "/page4",
    element: <Page4 />,
  },
  {
    path: "/page5",
    element: <Page5 />,
  },
  {
    path: "/page6",
    element: <Page6 />,
  },
  {
    path: "/page7",
    element: <Page7 />,
  },
  {
    path: "/page8",
    element: <Page8 />,
  },
  {
    path: "/page9",
    element: <Page9 />,
  },
  {
    path: "/page10",
    element: <Page10 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
