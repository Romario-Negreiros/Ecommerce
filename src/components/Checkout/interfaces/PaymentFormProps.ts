import { CheckoutToken } from '@chec/commerce.js/types/checkout-token';

export default interface Props {
    checkoutToken: CheckoutToken,
    backStep: () => void,
    nextStep: () => void,
    timeout: (timeout: number) => void
}