import {CDN_URL} from "../utils/constant"
const Restaurantcard=(props)=>{
    const{resdata}=props
    const{name,cloudinaryImageId,costForTwo,cuisines,deliveryTime,avgRatingString,areaName}=resdata?.info
    return(
        <div className="m-4 p-4 w-[200px]  rounded-lg">
         <img className="rounded-lg bg-gray-50 hover:transform hover:scale-105"   alt="res-logo"  src={CDN_URL+cloudinaryImageId} />
          <h3 className="font-bold py-4 text-lg">{name}</h3>
        
         
         <h5>{cuisines.join(",")}</h5> 
         <h6>{costForTwo}</h6>
         <h6>{areaName}</h6>
         <h5> {resdata.info.sla.deliveryTime} Minutes</h5>
          <h4>{avgRatingString}</h4>
        
       </div>
    );
};
export const withpromotedlabel=(Restaurantcard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-green-500 text-white p-2 m-2 rounded-lg">Promoted</label>
                <Restaurantcard {...props}/>
            </div>
        )
    }
}
export default Restaurantcard;