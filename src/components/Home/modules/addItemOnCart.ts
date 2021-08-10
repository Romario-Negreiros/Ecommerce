import { toast } from 'react-toastify';

const addItemOnCart = (id: number) => {
  if (typeof Storage !== undefined) {
    if (localStorage.getItem('cartItemsID') === null) {
      localStorage.setItem('cartItemsID', JSON.stringify([id]));
      toast('Item added on cart!');
    } else {
      const getAllIds: number[] = JSON.parse(
        localStorage.getItem('cartItemsID') as string
      );
      if (getAllIds.some(idOnCart => idOnCart === id))
        toast('This item is already in your cart!');
      else {
        localStorage.setItem('cartItemsID', JSON.stringify([...getAllIds, id]));
        toast('Item added on cart!');
      }
    }
  } else {
    alert("Sorry but your browser doesn't support HTML5 web storage");
  }
};

export default addItemOnCart;
