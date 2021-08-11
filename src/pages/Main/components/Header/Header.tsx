import { FC, useState, useEffect } from 'react';
import Props from './interfaces/Props';
import Home from '../../../../assets/home.svg';
import Cart from '../../../../assets/cart.svg';
import Checkout from '../../../../assets/checkout.svg';
import {
  Container,
  Icon,
  Left,
  LinkTag,
  Navigation,
  NavItem,
  NavList,
  Title,
  Circle,
  Number,
} from './styles';

const Header: FC<Props> = ({ productsOnCart }) => {
  const [numberOfItemsOnCart, setNumberOfItemsOnCart] = useState<number>(0);

  useEffect(() => {
    if (productsOnCart?.length) setNumberOfItemsOnCart(productsOnCart.length);
    else setNumberOfItemsOnCart(0)
  }, [productsOnCart]);

  return (
    <Container>
      <Left>
        <Title>ReactCommerce</Title>
      </Left>
      <Navigation>
        <NavList>
          <NavItem>
            <LinkTag to="/">
              <Icon src={Home} />
            </LinkTag>
            <LinkTag to="/cart">
              <Icon src={Cart} />
              {numberOfItemsOnCart > 0 ?
              <Circle>
                <Number>{numberOfItemsOnCart}</Number>
              </Circle>
              : ''}
            </LinkTag>
            {numberOfItemsOnCart > 0 ?
            <LinkTag to="/checkout">
              <Icon src={Checkout} />
            </LinkTag>
            : ''}
          </NavItem>
        </NavList>
      </Navigation>
    </Container>
  );
};

export default Header;
