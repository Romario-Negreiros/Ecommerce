import { commerce } from '../../../lib/commerce';
import { Cart } from "@chec/commerce.js/types/cart";

const refreshCart = async (setCart: (cart: Cart) => void) => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart)
}

export default refreshCart