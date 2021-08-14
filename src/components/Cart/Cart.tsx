import { FC } from 'react';
import Props from './interfaces/Props';
import {
  Wrapper,
  Container,
  Summary,
  SummaryTitle,
  SummaryItem,
  Infos,
  Options,
  SummaryButton,
  LinkTag,
  CartList,
  CartItem,
  ItemInfo,
  Title,
  Price,
  Quantity,
  ManageItem,
  ManagerButton,
  QuantityButton,
  Error,
} from './styles';
import { ToastContainer } from 'react-toastify';
import removeItemFromCart from './modules/removeItemFromCart';
import setCartToEmpty from './modules/setCartToEmpty';
import manageItemQuantity from './modules/manageItemQuantity';

const Cart: FC<Props> = ({ cart, setCart }) => {

  const isEmpty = !cart.line_items.length

  const FilledCart = () => {
    const { line_items } = cart
    return (
        <Container>
          <ToastContainer
            role="warning message"
            position="top-center"
            autoClose={2000}
            closeButton={false}
            progressStyle={{ background: '#004cff' }}
            toastStyle={{
              background: '#e4072c',
              color: '#fff',
              fontWeight: 'bold',
            }}
          />
          <Summary>
            <Infos>
              <SummaryTitle>Summary</SummaryTitle>
              <SummaryItem>
                Total price: {cart.subtotal.formatted_with_symbol}
              </SummaryItem>
              <SummaryItem>
                Total items: {cart.total_items}
              </SummaryItem>
              <SummaryItem>
                Total unique items: {cart.total_unique_items}
              </SummaryItem>
            </Infos>
            <Options>
              <SummaryButton
                onClick={() => setCartToEmpty(setCart)}
              >
                Delete all
              </SummaryButton>
              <LinkTag to="/checkout">
                Checkout
              </LinkTag>
            </Options>
          </Summary>
          <CartList>
            {line_items.map(product => {
              return (
                <CartItem key={product.id}>
                  <ItemInfo>
                    <Title>{product.name}</Title>
                    <Price>Unity price: {product.price.formatted_with_symbol}</Price>
                    <Price>Total price: {product.line_total.formatted_with_symbol}</Price>
                    <Quantity>Quantity: {product.quantity}</Quantity>
                  </ItemInfo>
                  <ManageItem>
                    <ManagerButton
                      onClick={() => removeItemFromCart(product.id, setCart) }
                      style={{ background: '#f70029' }}
                    >
                      Delete
                    </ManagerButton>
                    <QuantityButton
                      onClick={() =>
                        manageItemQuantity(
                          product.id,
                          product.quantity + 1,
                          setCart
                        )
                      }
                    >
                      More one
                    </QuantityButton>
                    <QuantityButton
                      onClick={() =>
                        manageItemQuantity(
                          product.id,
                          product.quantity - 1,
                          setCart
                        )
                      }
                    >
                      Less one
                    </QuantityButton>
                  </ManageItem>
                </CartItem>
              );
            })}
          </CartList>
        </Container>
    );
  } 
  const EmptyCart = () => {
    return (
        <Error>
          Your cart is empty!
        </Error>
    );
  }

  return (
    <Wrapper>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Wrapper>
  )
};

export default Cart;
