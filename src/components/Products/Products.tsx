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

const Products: FC<Props> = ({ products, setCart }) => {
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
            <Image src={getProductToShow.assets[0].url} />
            <Title>{getProductToShow.name}</Title>
          </InnerContainer>
          <InnerContainer>
            <TextContent>{getProductToShow.description.replace('</p>', '').slice(3)}</TextContent>
            <TextContent>Category: {getProductToShow.categories[0].name}</TextContent>
            <TextContent>{getProductToShow.price.formatted_with_symbol}</TextContent>
            <Manage>
              <Circle
                onClick={() =>
                  addItemOnCart(
                    getProductToShow.id,
                    1,
                    setCart
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
