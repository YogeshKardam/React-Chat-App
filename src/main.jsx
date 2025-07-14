import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter, Router} from 'react-router-dom'
import  {Provider}  from 'react-redux'
import './index.css'
import App from './App.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'

import store from './store/store.js'
import AuthLayout from './AuthLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (<AuthLayout authentication>
      <App />
    </AuthLayout>),
  },
  {

    path: '/login',
    element: (<AuthLayout authentication={false}>
      <Login />
    </AuthLayout>),
  },
  {
    path: '/signup',
    element: (<AuthLayout authentication={false}>
      <Signup />
    </AuthLayout>),
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
