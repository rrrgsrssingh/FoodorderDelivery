import Restaurantcard ,{withpromotedlabel} from './Restaurantcard';
import resList from '../utils/mockData';
import { useState, useEffect } from 'react';    
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body=()=>{
    const [list, setList] = useState([]);
    const [filterrestaurant, setFillterRestaurant]=useState([]);
    const [serachText,setSearchText]=useState(" ");
    const RestaurantcardPromoted=withpromotedlabel(Restaurantcard);
    //const arr=useState(resList)
    //const list=arr[0];
    //const setList=arr[1];
    //const filterTopRated = () => {
   //setList((list) =>
  //list.filter((res) => res.info && Number(res.avgRatingString)> 4)
//);
  //};
  useEffect(()=>{
    fetchData();
   //console.log("hello");/
  },[])
  const fetchData=async ()=>{
  // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   const data =await fetch("https://namastedev.com/api/v1/listRestaurants");
   //https://corsproxy.io/https://
   const json=await data.json();
   //console.log(json.data.cars[5].card.gridElement.infowithstyle);
   //console.log(json);
   //console.log("Saurav");
   //setList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.info);
   setList(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   setFillterRestaurant(json.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   
   
  }
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false) return <h1> Please connect to internet it's look like you are offline</h1>
//if(list.length==0){
  //return <Shimmer/>;
//}dc
    return list.length===0?(<Shimmer/>) :(
        <div className="body">
            
       
        <div  className="filter flex">
        <div className="  search m-4 p-4">
          <input type="text" className="border border-solid border-black border-r rounded-lg" value={serachText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
          <button className="px-4 py-1 m-4 bg-green-200 rounded-lg" onClick={()=>{
            setFillterRestaurant(list.filter((res)=>res.info.name.toLowerCase().includes(serachText.toLowerCase())));
                      }}> Search </button>
        </div>
        <div className="  search m-4 p-4">
        <button className=" px-4 py-2 m-4 rounded-lg bg-green-300 " onClick={()=>{
            
           
           setFillterRestaurant(filterrestaurant.filter((res)=>Number(res.info.avgRating)>4));
            //setList(filterOut);
            //console.log("hello saurav"); 
           
        }}>Top Rated Restaurant</button>
        </div>
          
        </div>
      
        <div className="flex flex-wrap ">
        {filterrestaurant.map((restaurant)=>(<Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
        {restaurant.info.promoted?(<RestaurantcardPromoted resdata={restaurant}/>):(<Restaurantcard   resdata={restaurant}/>)}</Link>))};
        
        </div>
        
        </div>
    ) 

}
export default Body;