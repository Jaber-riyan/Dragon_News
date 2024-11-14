import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Authentication from './Authentication/Authentication'
import router from './Router/Router'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
      <RouterProvider router={router}></RouterProvider>
    </Authentication>
  </StrictMode>,
)
