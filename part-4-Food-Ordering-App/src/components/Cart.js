import { useDispatch, useSelector } from "react-redux";

import CartItemsList from "./CartItemsList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="m-4 p-4 text-center">

            <h1 className="teaxt-3xl font-bold">Cart</h1>
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-normal py-2 px-4 rounded-full" onClick={handleClearCart}>clear cart</button>
            <CartItemsList items={cartItems} />
        </div>
    )
}
export default Cart;