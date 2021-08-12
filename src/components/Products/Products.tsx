import { FC } from 'react';
import { useLocation } from 'react-router';
import { Error, Manage } from '../Home/styles';
import Props from './interfaces/Props';
import {
  Wrapper,
  OuterContainer,
  InnerContainer,
  Image,
  TextContent,
  Title,
  Circle,
  CartIcon,
} from './styles';
import { ToastContainer } from 'react-toastify';
import CartPlus from '../../assets/cartplus.svg';
import addItemOnCart from './modules/addItemOnCart';

const Products: FC<Props> = ({ products, setProductsOnCart }) => {
  const { state } = useLocation();
  const getProductToShow = products.find(product => product.id === state);

  if (getProductToShow) {
    return (
      <Wrapper>
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
        <OuterContainer>
          <InnerContainer>
            <Image src={getProductToShow.image} />
            <Title>{getProductToShow.title}</Title>
          </InnerContainer>
          <InnerContainer>
            <TextContent>{getProductToShow.description}</TextContent>
            <TextContent>Category: {getProductToShow.category}</TextContent>
            <TextContent>$ {getProductToShow.price}</TextContent>
            <Manage>
              <Circle
                onClick={() =>
                  addItemOnCart(
                    getProductToShow.id,
                    products,
                    setProductsOnCart
                  )
                }
              >
                <CartIcon src={CartPlus} />
              </Circle>
            </Manage>
          </InnerContainer>
        </OuterContainer>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Error>The product doesn't exist</Error>
      </Wrapper>
    );
  }
};

export default Products;
