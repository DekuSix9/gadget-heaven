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
import ProductDetail from './Components/ProductsDetails/ProductDetail.jsx';
import LaptopDetails from './Components/LaptopDetails/LaptopDetails.jsx';
import PhonesDetails from './Components/PhonesDetails/PhonesDetails.jsx';
import Error from './Components/Error/Error.jsx';
import MacbookDetails from './Components/MacbookDetails/MacbookDetails.jsx';
import SmartwatchDetails from './Components/SmartWatchesDetails/SmartwatchDetails.jsx';
import IphoneDetails from './Components/IphoneDetails/IphoneDetails.jsx';
  
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
             {
              path:'/:id/:device_name',
              element:<ProductDetail></ProductDetail>,
              loader:async ()=>{
                           const res= await fetch('Products.json')
                           return res.json()
              },
              
             
            },

            {
              path:"/laptops/:id",
              element:<LaptopDetails></LaptopDetails>,
              loader:async ()=>{
                           const res= await fetch('Laptops.json')
                           return res.json()}

            },
            {
              path: "/phones/:id",
              element: <PhonesDetails></PhonesDetails>,
              loader: async () => {
                  const res = await fetch('/Phones.json'); 
                  return res.json();
              }
          },
          {
            path: "/macbooks/:id",
            element:<MacbookDetails></MacbookDetails>,
            loader: async () => {
                const res = await fetch('MacBooks.json'); 
                return res.json();
            }
        },
        {
          path: "/smartwatches/:id",
         element:<SmartwatchDetails></SmartwatchDetails>,
          loader: async () => {
              const res = await fetch('Smartwatches.json'); 
              return res.json();
          }
      },

         {
          path: "/iphones/:id",
        element:<IphoneDetails></IphoneDetails>,
          loader: async () => {
              const res = await fetch('iPhones.json'); 
              return res.json();
          }
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