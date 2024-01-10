import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { Layout } from './components/Layout.jsx'
import { About, Contact, Home, Services } from './components/index.js'
const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
      path: '',
      element: <Home />
    },
    {
      path: 'aboutus',
      element: <About />
    },
    {
      path: 'services',
      element: <Services/>
    },
    {
      path: 'contactus',
      element: <Contact />
    },
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(

  <RouterProvider router={router} />
   );
  