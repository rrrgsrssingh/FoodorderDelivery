import React,{lazy,Suspense,useState,useEffect} from 'react';
import ReactDom from 'react-dom/client';
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
import RestaurantMenu from './Component/RestaurantMenu';
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Component/Cart";

import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
const AppLayout=()=>{
    const [userInfo,setUserInfo]=useState();
useEffect(()=>{
 const data={
    userName:"Saurav Kumar"
 }
 setUserInfo(data.userName);
},[])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInuser:userInfo}}>
        <div className="app">
           <Header/>
          
           <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
};
//const [userInfo,setUserInfo]=useState();
const Grocery=lazy(()=>import('./Component/Grocery'));
const appRouter=createBrowserRouter([
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
        element:<About/>,
       
    },
      {
        path:"/Grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
       
    },
    {
        path:"/Contact",
        element:<Contact/>,
    },
    {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
    },
    {
     path:"/cart",
     element:<Cart/>,
    },

        ],
        errorElement:<Error/>,
    },
    
]);

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

