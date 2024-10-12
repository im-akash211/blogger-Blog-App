import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Page from './blogs/[id]/Page';
import AddProduct from './admin/addProduct/AddProduct';
import BlogLists from './admin/blogList/BlogList';
import Subscriptions from './admin/subscription/Subscription';
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path = "/" element = {<App/>}/>
      <Route path = "/blogs/:id" element = {<Page/>}/>
      <Route path = "/admin/addProduct" element = {<AddProduct/>}/>
      <Route path = "/admin/blogLists" element = {<BlogLists/>}/>
      <Route path = "/admin/subscriptions" element = {<Subscriptions/>}/>
    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router}/>
  </>
);