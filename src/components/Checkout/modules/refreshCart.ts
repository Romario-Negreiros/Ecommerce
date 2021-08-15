import { commerce } from '../../../lib/commerce';
import { Cart } from "@chec/commerce.js/types/cart";

const refreshCart = async (setCart: (cart: Cart) => void) => {
    const { cart } = await commerce.cart.empty();

    setCart(cart)
}

export default refreshCart