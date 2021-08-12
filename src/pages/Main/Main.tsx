import { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Cart, Checkout, Products} from '../../components/index';
import { Header, Searcher } from './components/index';
import { Error, IsLoading } from './styles';
import Product from './interfaces/productsInterface';
import getStoreProducts from './modules/getStoreProducts';

const Main: FC = () => {
  
  const [products, setProducts] = useState<Product[] | null>(null);
  const [productsOnCart, setProductsOnCart] = useState<Product[] | null>();

  const [error, setError] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    getStoreProducts(
      'https://fakestoreapi.com/products',
      setError,
      setIsLoaded,
      setProducts,
      setProductsOnCart
    );
  }, []);

  if (error) {
    return <Error>{error}</Error>;
  } else if (!isLoaded) {
    return <IsLoading>Loading...</IsLoading>;
  } else {
    return (
      <Router>
        <>
          <Header productsOnCart={productsOnCart as Product[] | null} />
          <Switch>
            <Route exact path="/">
              <Searcher setFilter={setFilter} />
              <Home products={products as Product[]} filter={filter} setProductsOnCart={setProductsOnCart} />
            </Route>
            <Route path="/cart">
              <Cart productsOnCart={productsOnCart as Product[] | null} setProductsOnCart={setProductsOnCart} />
            </Route>
            <Route path="/checkout">
              <Checkout productsOnCart={productsOnCart as Product[] | null} />
            </Route>
            <Route path="/products">
              <Products products={products as Product[]} setProductsOnCart={setProductsOnCart} />
            </Route>
          </Switch>
        </>
      </Router>
    );
  }
};

export default Main;
