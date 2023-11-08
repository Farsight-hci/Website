import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/raleway/static/Raleway-Bold.ttf'
import './assets/raleway/static/Raleway-Light.ttf'
import './assets/raleway/static/Raleway-Regular.ttf'
import Home from './pages/home';
import Resources from './pages/resources';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Website",
    element: <Home/>,
  },
  {
    path: "/Website/resources",
    element: <Resources/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
