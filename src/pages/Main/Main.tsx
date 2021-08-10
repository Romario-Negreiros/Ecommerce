import { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Cart } from '../../components/index';
import { Header, Searcher } from './components/index';
import { Error, IsLoading } from './styles';
import Product from './interfaces/productsInterface';
import getStoreProducts from './modules/getStoreProducts';

const Main: FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');
  const [productsOnCart, setProductsOnCart] = useState<
    Product[] | null
  >();

  useEffect(() => {
    getStoreProducts(
      'https://fakestoreapi.com/products',
      setError,
      setIsLoaded,
      setProducts
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
          </Switch>
        </>
      </Router>
    );
  }
};

export default Main;
