import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import ErrorPage from "./components/error-page";
import Contact from "./components/contact";
import Page1 from "./components/page1";
import {NextUIProvider} from '@nextui-org/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
path: "page1",
element: <Page1 />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <NextUIProvider>
  <RouterProvider router={router} />
  </NextUIProvider>
  </React.StrictMode>,
)
