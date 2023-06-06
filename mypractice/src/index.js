import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './home';
import Aboutus from './aboutus';
import Contactus from './contact';
import Services from './service';
import Ang from './ang';
import Reactjs from './reactjs';
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
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/aboutus",
        element: <Aboutus></Aboutus>
      },
      {
        path: "/contact",
        element: <Contactus></Contactus>
      },
      {
        path: "/service",
        element: <Services></Services>,
        children:[
          {
            path:'/service/ang',
            element:<Ang></Ang>
          },
          {
            path:'/service/react',
            element:<Reactjs></Reactjs>
          }
        ]
      }
    ]
  }
  

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={myrouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
