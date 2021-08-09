import { FC } from "react";
import Props from "./interfaces/Props";
import {
  Container,
  Summary,
  SummaryItem,
  Infos,
  Options,
  SummaryButton,
  LinkTag,
  CartList,
  CartItem,
  ItemInfo,
  Title,
  Category,
  Price,
  Quantity,
  ManageItem,
  ManagerButton,
  QuantityButton
} from "./styles";

const Cart: FC<Props> = ({ products }) => {


  
  return (
    <Container>
      <Summary>
        <Infos>
          <SummaryItem>hello world</SummaryItem>
          <SummaryItem>price: 29389238</SummaryItem>
          <SummaryItem>total items: 3023</SummaryItem>
        </Infos>
        <Options>
          <SummaryButton>Delete all</SummaryButton>
          <LinkTag to="/checkout" style={{background: '#2bdc0a'}}>
            Checkout
          </LinkTag>
        </Options>
      </Summary>
      <CartList>
        {products.map((product) => {
          const { id, title, price, category, quantity } = product;
          return (
            <CartItem key={id}>
              <ItemInfo>
                <Title>{title}</Title>
                <Category>
                  Category:{" "}
                  {category.charAt(0).toUpperCase() + category.substring(1)}
                </Category>
                <Price>$ {(price * quantity).toFixed(2)}</Price>
                <Quantity>Quantity : {quantity}</Quantity>
              </ItemInfo>
              <ManageItem>
                <ManagerButton style={{background: '#f70029'}}>Delete</ManagerButton>
                <QuantityButton>
                  More one
                </QuantityButton>
                <QuantityButton>
                  Less one
                </QuantityButton>
              </ManageItem>
            </CartItem>
          );
        })}
      </CartList>
    </Container>
  );
};

export default Cart;
