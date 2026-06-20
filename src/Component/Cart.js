import ItemList from "./itemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItem=useSelector((store)=>store.cart.items);
   //console.log(cartItem);
   const dispatch=useDispatch();
   const deleteItem=(cartItem)=>{
    dispatch(clearCart(cartItem))
   }
   return <div className="text-center font-bold">
    <h1 className="text-2xl p-4 m-4"> Cart</h1>
     <div className="w-6/12 m-auto">
     <button className="m-2 p-2 bg-black rounded-lg text-white" onClick={()=>deleteItem(cartItem)}>Clear cart</button>
     {cartItem.length==0 && <h1>Please Add Some Item in Your cart And Enjoy Shoping</h1>}
    <ItemList items={cartItem}/>
    </div> 
   </div>
};
export default Cart;