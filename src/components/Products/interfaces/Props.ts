import { Cart } from "@chec/commerce.js/types/cart";
import { Product } from "@chec/commerce.js/types/product";

export default interface Props {
    products: Product[]
    setCart: (cart: Cart) => void
}