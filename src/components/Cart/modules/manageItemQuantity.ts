import { Cart } from "@chec/commerce.js/types/cart";
import { commerce } from "../../../lib/commerce";

const manageItemQuantity = async (productId: string , quantity: Object, setCart: (cart: Cart) => void) => {

    const { cart } = await commerce.cart.update(productId, { quantity })

    setCart(cart);
    
}

export default manageItemQuantity;