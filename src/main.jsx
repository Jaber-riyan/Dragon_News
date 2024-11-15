import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Authentication from './Authentication/Authentication'
import router from './Router/Router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true} />
    </Authentication>
  </StrictMode>,
)
