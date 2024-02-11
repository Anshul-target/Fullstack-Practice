import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './pages/home.js';
import Auth from './pages/auth.js';
import Login from './pages/login.js'
import Signup from './pages/logout.js';
import Admin from './pages/admin.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext.js';

import { useState } from 'react';
const root = ReactDOM.createRoot(document.getElementById('root'));


const MainComponent = () => {


  return (
    <>
      <AuthProvider  >
        <RouterProvider router={router}>
        </RouterProvider>
      </AuthProvider>
    </>
  )

}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

  },
  {
    path: "/dashboard",
    element: <Admin />
  },
  {
    path: '/login',
    element: (
      <Auth authenticated={false}>
        <Login />
      </Auth>
    ),
  },
  {
    path: '/logout',
    element: (
      <Auth authenticated={false}>
        <Signup />
      </Auth>
    ),
  },
]);
root.render(
  <MainComponent>

  </MainComponent>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
