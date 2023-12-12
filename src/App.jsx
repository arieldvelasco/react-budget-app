import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

// LIBRARY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// LAYOUTS
import Main, { mainLoader } from './layouts/Main';

// ACTIONS
import { logoutAction } from './actions/out';

// ROUTES
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children:[
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={ router } />
      <ToastContainer />
    </div>
  )
}

export default App;