import Product from "../interfaces/productsInterface";

const getStoreProducts = (
  url: string,
  setError: (error: string) => void,
  setIsLoaded: (isLoaded: boolean) => void,
  setProducts: (products: Product[]) => void
) => {
  (async () => {
    try {
      const response = await fetch(url);
      const toJSON = await response.json();
      setProducts(toJSON);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoaded(true);
    }
  })();
};

export default getStoreProducts;
