import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './Pages/Home/index.jsx';
import SignUp from './Pages/Auth/SignUp.jsx';
import Login from './Pages/Auth/Login.jsx';
import ForgotPassword from './Pages/Auth/ForgotPassword.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/forget-password",
    element: <ForgotPassword/>
  },
  {
    path: "/home",
    element: <Home/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
