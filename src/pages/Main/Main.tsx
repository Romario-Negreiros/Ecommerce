import { FC, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Cart, Checkout, Products } from '../../components/index';
import { Header, Searcher } from './components/index';
import { Error, IsLoading } from './styles';
import { Product } from '@chec/commerce.js/types/product';
import getInitialData from './modules/getInitialData';
import { Cart as CartType } from '@chec/commerce.js/types/cart';

const Main: FC = () => {
  const [products, setProducts] = useState<Product[]>();
  const [cart, setCart] = useState<CartType>();

  const [error, setError] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    getInitialData(setError, setIsLoaded, setProducts, setCart);
  }, []);

  if (error) {
    return <Error>{error}</Error>;
  } else if (!isLoaded) {
    return <IsLoading>Loading...</IsLoading>;
  } else {
    return (
      <Router>
        <>
          <Header cart={cart as CartType} />
          <Switch>
            <Route exact path="/">
              <Searcher setFilter={setFilter} />
              <Home
                products={products as Product[]}
                filter={filter}
                setCart={setCart}
              />
            </Route>
            <Route path="/cart">
            <Cart
              cart={cart as CartType}
              setCart={setCart}
            />
          </Route>
        <Route path="/checkout">
              <Checkout cart={cart as CartType}/>
        </Route>
          <Route path="/products">
            <Products
              products={products as Product[]}
              setCart={setCart}
            />
          </Route> 
          </Switch>
        </>
      </Router>
    );
  }
};

export default Main;
