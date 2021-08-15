import refreshCart from './refreshCart';
import { commerce } from '../../../lib/commerce';
import { Cart } from '@chec/commerce.js/types/cart';
import { CheckoutCaptureResponse } from '@chec/commerce.js/types/checkout-capture-response';

const handleCheckoutCapture = async (
  checkoutTokenId: string,
  newOrder: any,
  setCart: (cart: Cart) => void,
  setOrder: (order: CheckoutCaptureResponse) => void,
  setErrorOnCreatingOrder: (errorOnCreatingOrder: string) => void
) => {
  try {
    const incomingOrder = await commerce.checkout.capture(
      checkoutTokenId,
      newOrder
    );

     setOrder(incomingOrder)
     refreshCart(setCart);
  } catch (err) {
    setErrorOnCreatingOrder(err.data.error.message)
  }
};

export default handleCheckoutCapture;


