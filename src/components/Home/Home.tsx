import { FC } from 'react';
import {
  Wrapper,
  Container,
  Products,
  Card,
  Image,
  Title,
  Price,
  Category,
  Info,
  LinkTag,
  Manage,
  Circle,
  CartIcon,
  Error,
} from './styles';
import CartPlus from '../../assets/cartplus.svg';
import Props from './interfaces/Props';
import addItemOnCart from './modules/addItemOnCart';
import { ToastContainer } from 'react-toastify';

const Home: FC<Props> = ({ products, filter, setCart }) => {
  const getOutput: JSX.Element[] = [];
  products.forEach(product => {
    if (filter) {
      const filterLC = filter.toLowerCase();
      if (
        product.name.toLowerCase().includes(filterLC) ||
        product.description.toLowerCase().includes(filterLC) ||
        product.categories[0].name.toLowerCase() === filterLC
      ) {
        getOutput.push(
          <Card key={product.id}>
            <LinkTag
              to={{ pathname: '/products/' + product.id, state: product.id }}
            >
              <Image src={product.assets[0].url} />
              <Info>
                <Title>{product.name}</Title>
                <Price>{product.price.formatted_with_symbol}</Price>
                <Category>
                  Category :{' '}
                  {product.categories[0].name.charAt(0).toUpperCase() +
                    product.categories[0].name.substring(1)}
                </Category>
              </Info>
            </LinkTag>
            <Manage>
              <Circle
                onClick={() => addItemOnCart(product.id, 1, setCart)}
              >
                <CartIcon src={CartPlus} alt="add cart" />
              </Circle>
            </Manage>
          </Card>
        );
      }
    } else {
      getOutput.push(
        <Card key={product.id}>
          <LinkTag
            to={{ pathname: '/products/' + product.id, state: product.id }}
          >
            <Image src={product.assets[0].url} />
            <Info>
              <Title>{product.name}</Title>
              <Price>{product.price.formatted_with_symbol}</Price>
              <Category>
                Category :{' '}
                {product.categories[0].name.charAt(0).toUpperCase() +
                  product.categories[0].name.substring(1)}
              </Category>
            </Info>
          </LinkTag>
          <Manage>
            <Circle
              onClick={() => addItemOnCart(product.id, 1, setCart)}
            >
              <CartIcon src={CartPlus} alt="add cart" />
            </Circle>
          </Manage>
        </Card>
      );
    }
  });

  if (getOutput.length) {
    return (
      <Container>
        <ToastContainer
          role="warning message"
          position="top-center"
          autoClose={2000}
          closeButton={false}
          progressStyle={{ background: '#004cff' }}
          toastStyle={{
            background: '#8df37b',
            color: '#000',
            fontWeight: 'bold',
          }}
        />
        <Products>{getOutput}</Products>
      </Container>
    );
  } else {
    return (
      <Wrapper>
        <Error>Nothing was found!</Error>
      </Wrapper>
    );
  }
};

export default Home;
