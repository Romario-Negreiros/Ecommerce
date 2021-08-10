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
  Category,
  Price,
  Quantity,
  ManageItem,
  ManagerButton,
  QuantityButton,
  Error,
} from './styles';
import { ToastContainer } from 'react-toastify';
import removeItemFromCart from './modules/removeItemFromCart';
import removeAllItemsFromCart from './modules/removeAllItemsFromCart';
import manageItemQuantity from './modules/manageItemQuantity';

const Cart: FC<Props> = ({ productsOnCart, setProductsOnCart }) => {

  if (productsOnCart?.length) {
    const getTotalPrice = productsOnCart?.reduce(
      (a, product) => a + product.quantity * product.price,
      0
    );
    const getTotalNumberOfItems = productsOnCart?.reduce(
      (a, product) => a + product.quantity,
      0
    );
    return (
      <Wrapper>
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
                Total price: ${getTotalPrice?.toFixed(2)}{' '}
              </SummaryItem>
              <SummaryItem>Total items: {getTotalNumberOfItems}</SummaryItem>
            </Infos>
            <Options>
              <SummaryButton
                onClick={() => removeAllItemsFromCart(setProductsOnCart)}
              >
                Delete all
              </SummaryButton>
              <LinkTag to="/checkout" style={{ background: '#2bdc0a' }}>
                Checkout
              </LinkTag>
            </Options>
          </Summary>
          <CartList>
            {productsOnCart?.map(product => {
              const { id, title, price, category, quantity } = product;
              return (
                <CartItem key={id}>
                  <ItemInfo>
                    <Title>{title}</Title>
                    <Category>
                      Category:{' '}
                      {category.charAt(0).toUpperCase() + category.substring(1)}
                    </Category>
                    <Price>$ {(price * quantity).toFixed(2)}</Price>
                    <Quantity>Quantity : {quantity}</Quantity>
                  </ItemInfo>
                  <ManageItem>
                    <ManagerButton
                      onClick={() =>
                        removeItemFromCart(
                          id,
                          setProductsOnCart,
                          productsOnCart
                        )
                      }
                      style={{ background: '#f70029' }}
                    >
                      Delete
                    </ManagerButton>
                    <QuantityButton
                      data-action="more"
                      onClick={event =>
                        manageItemQuantity(
                          event,
                          id,
                          productsOnCart,
                          setProductsOnCart
                        )
                      }
                    >
                      More one
                    </QuantityButton>
                    <QuantityButton
                      data-action="less"
                      onClick={event =>
                        manageItemQuantity(
                          event,
                          id,
                          productsOnCart,
                          setProductsOnCart
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
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Error>
          Your cart is empty!
        </Error>
      </Wrapper>
    );
  }
};

export default Cart;
