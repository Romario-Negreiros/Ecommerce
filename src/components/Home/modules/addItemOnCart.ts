import { toast } from 'react-toastify';
import Props from '../interfaces/Props';

const addItemOnCart = (
  id: number,
  products: Props['products'],
  setProductsOnCart: Props['setProductsOnCart']
) => {
  if (typeof Storage !== undefined) {
    if (localStorage.getItem('cartItemsID') === null) {
      const getNewCartProduct = products.filter(product => product.id === id);
      setProductsOnCart(getNewCartProduct);
      localStorage.setItem('cartItemsID', JSON.stringify([id]));
      toast('Item added on cart!');
    } else {
      const getAllIds: number[] = JSON.parse(
        localStorage.getItem('cartItemsID') as string
      );
      if (getAllIds.some(idOnCart => idOnCart === id))
        toast('This item is already in your cart!');
      else {
        const getNewCartProducts = products.filter(product => getAllIds.some(idOnCart => product.id === idOnCart) || product.id === id)
        setProductsOnCart(getNewCartProducts);
        localStorage.setItem('cartItemsID', JSON.stringify([...getAllIds, id]));
        toast('Item added on cart!');
      }
    }
  } else toast("Sorry but your browser doesn't support HTML5 web storage");
};

export default addItemOnCart;
