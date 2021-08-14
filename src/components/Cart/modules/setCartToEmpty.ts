import { Cart } from "@chec/commerce.js/types/cart";
import { commerce } from "../../../lib/commerce";

const setCartToEmpty = async (setCart: (cart: Cart) => void) => {

    const { cart } = await commerce.cart.empty();

    setCart(cart);

}

export default setCartToEmpty;