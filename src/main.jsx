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
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>

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
