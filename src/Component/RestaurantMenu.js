import { useEffect, useState } from "react";
import Shimmer  from "./Shimmer";
import {CDN_URL} from "../utils/constant";
import {useParams} from "react-router-dom";
import  useRestaurantMenu  from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
//import { MENU_API } from "../utils/constant";
const RestaurantMenu=()=>{
   //const [resinfo,setResInfo]=useState(null);
   const { resId } =useParams();
   const [showIndex,setShowIndex]=useState(null);
   //console.log(resId);
    /*useEffect(()=>{
        fetchMenu();

    },[]);


const fetchMenu= async()=>{
    const data=await fetch(MENU_API + resId);
    //const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=1019000");

    //const data =await fetch(`https://localhost:5000/menu?id=${resId}`)
    const json=await data.json();
    //const j=await data.json();
    //onsole.log("the data is",json)
    //const text =await data.json();
    /*if(!text){
        console.log("Empty Response");
        return;
    }
    const json=JSON.parse(text);*/
    //setResInfo(json.data);
    
//};
//customhooks.
const resinfo=useRestaurantMenu(resId);
if (resinfo===null) return <Shimmer/>;
const{itemCards}=resinfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[3]?.card?.card;
//console.log(resinfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards);
const catagories=resinfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
//console.log(catagories);
    return (
        <div className="text-center">
            <h1 className="font-bold p-4 m-4 text-xl">{resinfo?.cards[2]?.card?.card?.info?.name}</h1>
             <ul className="font-bold text-lg">
                <li>{resinfo?.cards[2]?.card?.card?.info?.cuisines.join(",")}</li>
               <h1>{resinfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h1>
                
            </ul>
            {catagories.map((category,index)=>{ return <RestaurantCategory 
            //key={category.card?.card?.itemCards?.card?.info?.id} 
            //key={category.card?.card?.itemCards?.card?.info?.id}
            key={index}
            resdata={category.card?.card} 
            showItems={showIndex===index?true:false}
            setShowIndex={()=>setShowIndex(index)}

            />})}
             
            {/*<h3>Menu</h3>
            <img   alt-logo="res-logo" src={CDN_URL+resinfo?.cards[2]?.card?.card?.info?.cloudinaryImageId}/>
            <ul>
                <li>{resinfo?.cards[2]?.card?.card?.info?.cuisines.join(",")}</li>
               
                
            </ul>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item,s)=>(<li key={s}>{item.card.info.name}-{"Rs."}{item.card.info.price/100 || item.card.info.defaultprice }</li>))}
        </ul> */}
        </div>
    )
};
export default RestaurantMenu;