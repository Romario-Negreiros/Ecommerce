import Product from '../interfaces/productsInterface';

const getStoreProducts = (
  url: string,
  setError: (error: string) => void,
  setIsLoaded: (isLoaded: boolean) => void,
  setProducts: (products: Product[]) => void,
  setProductsOnCart: (productsOnCart: Product[] | null) =>void
) => {
  (async () => {
    try {
      const response = await fetch(url);
      const toJSON = await response.json();
      const products = toJSON.map((product: Object) => {
        return { ...product, quantity: 1, isSaved: false, isOnCart: false };
      });
      if(localStorage.getItem('cartItemsID')) {
        const idOfItemsOnCart = JSON.parse(localStorage.getItem('cartItemsID') as string);
        const productsOnCart = products.filter((product: Product) => idOfItemsOnCart.some((id: number) => id === product.id));
        setProductsOnCart(productsOnCart);
      }
      setProducts(products);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoaded(true);
    }
  })();
};

export default getStoreProducts;
