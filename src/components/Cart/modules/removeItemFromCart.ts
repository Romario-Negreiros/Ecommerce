import { toast } from 'react-toastify';
import Props from '../interfaces/Props';

const removeItemFromCart = (
  id: number,
  setProductsOnCart: (products: Props['products'] | null) => void,
  productsOnCart: Props['products']
) => {
  const getAllCartItems: number[] = JSON.parse(
    localStorage.getItem('cartItemsID') as string
  );
  const removeItem: number[] = getAllCartItems.filter(
    idOnCart => idOnCart !== id
  );
  if (removeItem.length) {
    localStorage.setItem('cartItemsID', JSON.stringify(removeItem));
    const getNewProductsOnCart = productsOnCart.filter(
      product => product.id !== id
    );
    setProductsOnCart(getNewProductsOnCart);
  } else {
    localStorage.removeItem('cartItemsID');
    setProductsOnCart(null);
  }
  toast('Item succesfully deleted from cart!');
};

export default removeItemFromCart;
