import { FC } from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import Props from '../interfaces/CheckoutReviewProps';

const Review: FC<Props> = ({ productsOnCart }) => {
  if (productsOnCart?.length) {
      const getTotalPrice: number = productsOnCart.reduce((a, product) => a + product.quantity * product.price, 0);
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
          {productsOnCart?.map(product => (
            <ListItem key={product.id} style={{ padding: '10px 0'}}>
                <ListItemText primary={product.title} secondary={`Quantity: ${product.quantity}`} />
                <Typography variant="body2">
                    $ {(product.quantity * product.price).toFixed(2)}
                </Typography>
            </ListItem>
          ))}
          <ListItem style={{padding: '10px 0'}}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                  $ {getTotalPrice.toFixed(2)}
              </Typography>
          </ListItem>
        </List>
      </>
    );
  } else {
    return <div>Empty</div>;
  }
};

export default Review;
