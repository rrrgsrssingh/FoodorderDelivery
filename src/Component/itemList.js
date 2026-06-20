import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";
 

// export default ItemList;
const ItemList = ({ items }) => {
    //console.log(items);
    const dispatch=useDispatch();
const handleItem=(item)=>{
     dispatch(addItem(item));
    
    
}
    return (
        <div>
            {items.map((item,index) => (
                <div 
                    //key={item.card.info.id}
                    key={index}
                    className="p-4 m-4 border-b-2 border-gray-200 text-left flex justify-between items-center bg-white shadow-sm rounded-lg"
                > 
                    {/* Left Section: Text Content (Name, Price, Description) */}
                    <div className="w-9/12 pr-4">
                        <div className="py-2">
                            <span className="font-bold text-lg text-gray-800">{item.card.info.name}</span>
                            <span className="font-semibold text-md text-gray-600">
                                 - ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 font-normal leading-relaxed">
                            {item.card.info.description}
                        </p>
                    </div> 

                    {/* Right Section: Image and Add Button Container */}
                    <div className="w-3/12 relative flex flex-col items-center justify-center">
                        {/* Image */}
                        {item.card.info.imageId && (
                            <img 
                                className="w-32 h-32 object-cover rounded-xl shadow-md" 
                                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + item.card.info.imageId}
                                alt={item.card.info.name}
                            />
                        )}
                        
                        {/* Button positioned nicely overlapping the bottom of the image */}
                        <div className={item.card.info.imageId ? "absolute bottom-[-12px]" : ""}>
                            <button className="px-6 py-1.5 bg-white text-green-600 font-bold border border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition-all uppercase text-sm"
                            onClick={()=>handleItem(item)}>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;