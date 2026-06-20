import { MENU_API } from "../utils/constant";
import { useEffect,useState } from "react";


const useRestaurantMenu=(resId)=>{
    const [resinfo,setResInfo]=useState(null);
    // fetch the data.
    useEffect(()=>{
        fetchMenu();

    },[]);
    const fetchMenu= async()=>{
    const data=await fetch(MENU_API + resId);
    const json=await data.json();
    setResInfo(json.data);
    };

    return resinfo;
    
};
export default useRestaurantMenu;