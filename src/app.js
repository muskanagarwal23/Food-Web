import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import {createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"; 
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
            <Footer />
        </div>
    );
};

const appRouter = createBrowserRouter([
 {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body/>
         },
        {
            path:"/About",
            element:<About/>
         },
        
         {
            path: "/Contact",
            element:<Contact/>
         },
         {
            path: "/Cart",
            element:<Cart/>
         },
         {
            path:"/restaurant/:resId",
            element:<Menu/>
         },
    ],
    errorElement: <Error/>
 },
 

],
 
{
    future:{
      v7_startTransition: true, 
      // Enable the new behavior for future React Router v7
    },
  }

);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);