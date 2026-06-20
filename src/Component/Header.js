import { LOGO_URL } from "../utils/constant";
import { useState,useContext } from  "react";
import {Link} from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "../utils/UserContext";
import {useSelector}  from "react-redux";

const Header=()=>{
    const [login ,setLogIn]=useState("Login");
    const onlinestatus=useOnlineStatus();
    const {loggedInuser}=useContext(UserContext);
    const cart=useSelector((store)=>store.cart.items);
    return( 
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo">
                <img  className="w-56 bg-pink-200" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 space-x-4 text-lg">
                    <li>Online Status: {onlinestatus?"🟢":"🔴"}</li>  
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/About">About</Link>
                    </li>
                      <li>
                      <Link to="/Grocery">Grocery</Link>
                    </li>
                    
                    <li>
                    <Link to="/Contact">Contact Us</Link>
                    </li>
                    <li className="font-bold text-lg">
                    
                    <Link to="/cart">Cart:({cart.length} Items)</Link></li>
                    <button className="Login-btn" onClick={()=>{login==="Login"?setLogIn("LogOut"):setLogIn("Login")}}>{login}</button>
                    <li className="font-bold">{loggedInuser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;