import { FC, useState, useEffect } from 'react';
import Props from './interfaces/Props';
import Home from '../../../../assets/home.svg';
import Cart from '../../../../assets/cart.svg';
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
              <Circle>
                <Number>{numberOfItemsOnCart}</Number>
              </Circle>
            </LinkTag>
          </NavItem>
        </NavList>
      </Navigation>
    </Container>
  );
};

export default Header;
