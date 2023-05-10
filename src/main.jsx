import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcoffee from './compo/Addcoffee.jsx';
import Updetecoffee from './compo/Updetecoffee.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path:"Addcoffee",
    element:<Addcoffee></Addcoffee>
  },
  {
      path:"Updetecoffee/:id",
      element:<Updetecoffee />,
      loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
