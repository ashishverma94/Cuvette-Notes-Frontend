import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Notes from "./Pages/Notes.jsx"
import SideBar from './components/SideBar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
    children: [
      { index: true, element:<Home/> },
      // LOGIN
      {
        path: ":id",
        element:<Notes/>
      },
]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
