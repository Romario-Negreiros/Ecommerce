import { FC } from 'react';
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
    Title
} from './styles';

const Header: FC = () => {
    return (
        <Container>
            <Left>
                <Title>
                    ReactCommerce
                </Title>
            </Left>
            <Navigation>
                <NavList>
                    <NavItem>
                        <LinkTag to="/">
                            <Icon src={Home} />
                        </LinkTag>
                        <LinkTag to="/cart">
                            <Icon src={Cart} />
                        </LinkTag>
                    </NavItem>
                </NavList>
            </Navigation>
        </Container>
    )
}

export default Header;