import { toast } from 'react-toastify';

import { Cart } from '@chec/commerce.js/types/cart';
import { commerce } from '../../../lib/commerce';

const addItemOnCart = async (
  productId: string,
  quantity: number,
  setCart: (cart: Cart) => void
) => {
  try {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
    toast('The product was succesfully added on the cart!')
  } catch (err) {
    toast('Something unnexpected happened, please try again!');
  }
};

export default addItemOnCart;

