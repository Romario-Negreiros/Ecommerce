import { Cart } from "@chec/commerce.js/types/cart";
import { commerce } from "../../../lib/commerce";

const removeItemFromCart = async (productId: string, setCart: (cart: Cart) => void) => {

    const { cart } = await commerce.cart.remove(productId)

    setCart(cart);

}

export default removeItemFromCart;