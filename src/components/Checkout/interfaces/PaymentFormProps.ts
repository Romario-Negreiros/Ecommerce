import { CheckoutToken } from '@chec/commerce.js/types/checkout-token';
import { Cart } from "@chec/commerce.js/types/cart";
import Inputs from "./Inputs";
import { CheckoutCaptureResponse } from '@chec/commerce.js/types/checkout-capture-response';

export default interface Props {
    shippingData: Inputs,
    checkoutToken: CheckoutToken,
    setCart: (cart: Cart) => void,
    setErrorOnCreatingOrder: (errorOnCreatingOrder: string) => void,
    setOrder: (order: CheckoutCaptureResponse) => void,
    backStep: () => void,
    nextStep: () => void
}