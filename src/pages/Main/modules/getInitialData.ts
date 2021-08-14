import { Product } from "@chec/commerce.js/types/product";
import { Cart } from "@chec/commerce.js/types/cart";
import { commerce } from '../../../lib/commerce';

const getStoreProducts = (
  setError: (error: string) => void,
  setIsLoaded: (isLoaded: boolean) => void,
  setProducts: (products: Product[]) => void,
  setCart: (cart: Cart) => void,
) => {
  (async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
      setCart(await commerce.cart.retrieve());
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoaded(true);
    }
  })();
};

export default getStoreProducts;