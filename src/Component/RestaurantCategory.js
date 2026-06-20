import ItemList from "./itemList";
import {useState} from "react";

const RestaurantCategory=({resdata,showItems,setShowIndex})=>{
    //const {category}=props
    //console.log(props)
    // const [showItems,setShowItems]=useState(null);
     const handleClick=()=>{
    //   setShowItems(!showItems);
    setShowIndex();
     }
    return(
        <div>
        <div className="text-left mx-auto p-4 my-4 border border-solid border-black-400 rounded-lg w-6/12 bg-gray-100  justify-betweenflex ">
        <div className="flex justify-between  cursor-pointer" 
        onClick={handleClick}>
        <span className="font-bold text-lg"> {resdata?.title}({resdata?.itemCards?.length})</span>
        <span > ▼ </span>
        </div>
          {showItems && <ItemList items={resdata?.itemCards} />}
        </div>
      
        </div>
    ) 
}
export default RestaurantCategory;