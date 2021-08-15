import { FC } from 'react';
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

const Header: FC<Props> = ({ cart }) => {
  
  const { total_items } = cart

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
                <Number>{total_items}</Number>
              </Circle>
            </LinkTag>
          </NavItem>
        </NavList>
      </Navigation>
    </Container>
  );
};

export default Header;
