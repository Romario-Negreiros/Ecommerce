import { useEffect } from 'react';
import { FC, useState } from 'react';
import Props from './interfaces/Props';
import {
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
} from './styles';
import { ToastContainer } from 'react-toastify';
import removeItemFromCart from './modules/removeItemFromCart';
import removeAllItemsFromCart from './modules/removeAllItemsFromCart';
import manageItemQuantity from './modules/manageItemQuantity';

const Cart: FC<Props> = ({ products }) => {
  const [productsOnCart, setProductsOnCart] = useState<
    Props['products'] | null
  >();

  useEffect(() => {
    if (localStorage.getItem('cartItemsID')) {
      const idOfItemsOnCart = JSON.parse(
        localStorage.getItem('cartItemsID') as string
      );
      const getCartItems: Props['products'] = products.filter(product =>
        idOfItemsOnCart.some((id: number) => id === product.id)
      );
      setProductsOnCart(getCartItems);
    } else setProductsOnCart(null);
  }, [products]);

  if (productsOnCart !== null) {
    const getTotalPrice = productsOnCart?.reduce(
      (a, product) => a + product.quantity * product.price,
      0
    );
    const getTotalNumberOfItems = productsOnCart?.reduce(
      (a, product) => a + product.quantity,
      0
    );
    return (
      <Container>
        <ToastContainer
          role="warning message"
          position = "top-center"
          autoClose = {2000}
          closeButton = {false}
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
            <SummaryButton onClick={() => removeAllItemsFromCart(setProductsOnCart)}>Delete all</SummaryButton>
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
                      removeItemFromCart(id, setProductsOnCart, productsOnCart)
                    }
                    style={{ background: '#f70029' }}
                  >
                    Delete
                  </ManagerButton>
                  <QuantityButton data-action="more" onClick={event => manageItemQuantity(event, id, productsOnCart, setProductsOnCart)}>More one</QuantityButton>
                  <QuantityButton data-action="less" onClick={event => manageItemQuantity(event, id, productsOnCart, setProductsOnCart)}>Less one</QuantityButton>
                </ManageItem>
              </CartItem>
            );
          })}
        </CartList>
      </Container>
    );
  } else {
    return <p>the cart is empty asshole</p>;
  }
};

export default Cart;
