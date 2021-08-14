import { Cart } from "@chec/commerce.js/types/cart";
import Inputs from "./Inputs";

export default interface Props {
    shippingData: Inputs,
    cart: Cart
    backStep: () => void,
    nextStep: () => void
}