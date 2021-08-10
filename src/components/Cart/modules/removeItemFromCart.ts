import { toast } from 'react-toastify';
import Props from '../interfaces/Props';

const removeItemFromCart = (
  id: number,
  setProductsOnCart: (products: Props['productsOnCart'] | null) => void,
  productsOnCart: Props['productsOnCart']
) => {
  const getAllCartItems: number[] = JSON.parse(
    localStorage.getItem('cartItemsID') as string
  );
  const removeItem: number[] = getAllCartItems.filter(
    idOnCart => idOnCart !== id
  );
  if (removeItem.length) {
    if (productsOnCart) {
      localStorage.setItem('cartItemsID', JSON.stringify(removeItem));
      const getNewProductsOnCart = productsOnCart.filter(
        product => product.id !== id
      );
      setProductsOnCart(getNewProductsOnCart);
      toast('Item succesfully deleted from cart!');
    }
  } else {
    localStorage.removeItem('cartItemsID');
    setProductsOnCart(null);
  }
};

export default removeItemFromCart;
