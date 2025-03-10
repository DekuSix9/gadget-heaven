import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Statics from './Components/Statics/Statics.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import AllProducts from './Components/AllProducts/AllProducts.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Phones from './Components/Phones/Phones.jsx';
import Iphones from './Components/Iphones/Iphones.jsx';
import MacBooks from './Components/Macbooks/MacBooks.jsx';
import SmartWaatches from './Components/SmartWatches/SmartWaatches.jsx';
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        children:[
             {
              path:'/',
              element:<AllProducts></AllProducts>
             },
             {
              path:'/laptops',
              element:<Laptops></Laptops>
             },
             {
              path:'/phones',
              element:<Phones></Phones>
             },
             {
              path:'/iphones',
              element:<Iphones></Iphones>
             },
             {
              path:'/macbooks',
              element:<MacBooks></MacBooks>
             },
             {
              path:'/smartwatches',
              element:<SmartWaatches></SmartWaatches>
             },
        ]

      },
      {
        path:"/statics",
        element:<Statics></Statics>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
