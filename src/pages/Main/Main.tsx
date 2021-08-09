import { FC, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Cart } from "../../components/index";
import { Header, Searcher } from "./components/index";
import { Error, IsLoading } from "./styles";
import Product from "./interfaces/productsInterface";
import getStoreProducts from "./modules/getStoreProducts";

const Main: FC = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    getStoreProducts(
      "https://fakestoreapi.com/products",
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
          <Header />
          <Switch>
            <Route exact path="/">
              <Searcher setFilter={setFilter} />
              <Home
                products={products as Product[]}
                filter={filter}
              />
            </Route>
            <Route path="/cart">
              <Cart products={products as Product[]}/>
            </Route>
          </Switch>
        </>
      </Router>
    );
  }
};

export default Main;
