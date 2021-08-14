import { CheckoutToken } from '@chec/commerce.js/types/checkout-token';
import Inputs from './Inputs';

export default interface Props {
    next: (data: Inputs) => void,
    checkoutToken: CheckoutToken
}