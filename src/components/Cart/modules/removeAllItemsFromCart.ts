import Props from "../interfaces/Props";
import { toast } from "react-toastify";

const removeAllItemsFromCart = (setProductsOnCart: (products: Props["products"] | null) => void) => {
    localStorage.removeItem('cartItemsID')
    setProductsOnCart(null)   
    toast('Succesfully deleted all items from cart!')
}

export default removeAllItemsFromCart;