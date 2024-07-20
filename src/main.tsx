import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import ErrorPage from "./components/error-page";
import Contact from "./components/contact";
import Page1 from "./components/page1";
import Blog from "./components/Blog";
import ArticlesBlog from './components/ArticlesBlog';
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
  {
    path: "blog",   // Ajoutez cette route pour le blog
    element: <Blog />,
  },
  {
    path: "articles/:articleId",   // Ajoutez cette route pour l'article
    element: <ArticlesBlog />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <NextUIProvider>
  <RouterProvider router={router} />
  </NextUIProvider>
  </React.StrictMode>,
)
