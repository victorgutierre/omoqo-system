import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './components/homePage';
import EditShipPage from './components/editShipPage';
import NewShipPage from './components/newShipPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "edit/:shipCode",
        element: <EditShipPage></EditShipPage>,
      },
      {
        path: "new",
        element: <NewShipPage></NewShipPage>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
