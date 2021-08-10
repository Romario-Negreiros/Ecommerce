import Props from '../interfaces/Props';
import { toast } from 'react-toastify';

const manageItemQuantity = (
  event: React.MouseEvent<HTMLButtonElement>,
  id: number,
  productsOnCart: Props['products'],
  setProductsOnCart: (products: Props['products']) => void
) => {
  const setNewItemQuantity = productsOnCart.map(product => {
    if (event.currentTarget) {
      const action = event.currentTarget.getAttribute('data-action');
      if (action === 'more') {
        if (product.id === id) {
          if (product.quantity < 20) product.quantity++;
          else toast('Maximum number of items reached!');
        }
      } else if (action === 'less') {
        if (product.id === id) {
            if (product.quantity > 1) product.quantity--;
            else toast('Minimum number of items reached, if you want to remove the item, click on the remove button!');
          } 
      }
    }
    return product
  });
  setProductsOnCart(setNewItemQuantity)
};

export default manageItemQuantity;
