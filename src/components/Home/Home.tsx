import { FC } from 'react';
import {
    Container, Title, Products, Card, Image, Name, Price, Category
} from './styles';
import Props from './interfaces/Props';

const Home: FC<Props> = ({products, filter}) => {
    return (
        <Container>
            <Title>
                Filtering list by: <br />
                {filter}
            </Title>
            <Products>
                {products.map((product, index) => (
                    <Card key={index}>
                        <Image src={product.image} />
                        <Name>{product.title}</Name>
                        <Price>$ {product.price}</Price>
                        <Category>{product.category}</Category>
                    </Card>
                ))}
            </Products>
        </Container>
    )
}

export default Home;