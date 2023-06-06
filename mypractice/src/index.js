import React from 'react';
import MyForm from './form';
import Todolist from './Todolist';
import Countries from './Countries';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CountryDetails from './CountryDetails';


const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
          path:'/todolist',
          element:<Todolist/>
      },
      {
          path:'/Countries',
          element:<Countries/>
      },
      {
          path:'/countrydetails/:cname',
          element:<CountryDetails/>
      }
  ]
  },
  {
    path:'/form',
    element:<MyForm></MyForm>
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
