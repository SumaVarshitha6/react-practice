import React from 'react';
import Home from './Home';
import Aboutus from './Aboutus';
import Products from './Products';
import Services from './Services';
import Mobile from './Mobile';
import Laptop from './Laptop';
import Ac from './Ac';
import Consultation from './cons';
import Training from './train';
import Seo from './seo';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
          path:'/home',
          element:<Home/>
      },
      {
          path:'/aboutus',
          element:<Aboutus/>
      },
      {
        path:'/products',
        element:<Products/>
      },
      {
        path:'/services',
        element:<Services/>,
        children:[
          {
            path:'/services/cons',
            element:<Consultation/>   
        },
        {
          path:'/services/train',
          element:<Training/>
        },
        {
          path:'/services/seo',
          element:<Seo/>
        }
        ]
      },
      {
        path:'/mobile',
        element:<Mobile></Mobile>
      },
      {
        path:'/laptop',
        element:<Laptop></Laptop>
      },
      {
        path:'/ac',
        element:<Ac></Ac>
      },
    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={myrouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
