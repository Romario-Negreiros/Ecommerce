import { FC } from 'react';
import {
    Container,
    Summary,
    SummaryItem,
    LinkTag,
    Infos,
    Options
} from './styles';

const Cart: FC = () => {
    return (
        <Container>
            <Summary>
            <Infos>
                <SummaryItem>
                    hello world
                </SummaryItem>
                <SummaryItem>
                    price: 29389238
                </SummaryItem>
                <SummaryItem>
                    total items: 3023
                </SummaryItem>
            </Infos>
            <Options>
                <LinkTag to="/">
                    Go to checkout
                </LinkTag>
            </Options>
            </Summary>
        </Container>
    )
}

export default Cart;