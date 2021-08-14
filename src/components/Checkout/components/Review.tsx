import { FC } from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import Props from '../interfaces/CheckoutReviewProps';

const Review: FC<Props> = ({ cart }) => {

    return (
      <>
        <Typography variant="h6" gutterBottom>
          Order summary
        </Typography>
        <List disablePadding>
          {cart.line_items.map(product => (
            <ListItem key={product.id} style={{ padding: '10px 0'}}>
                <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                <Typography variant="body2">
                   {product.line_total.formatted_with_symbol}
                </Typography>
            </ListItem>
          ))}
          <ListItem style={{padding: '10px 0'}}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                  {cart.subtotal.formatted_with_symbol}
              </Typography>
          </ListItem>
        </List>
      </>
    );

};

export default Review;
