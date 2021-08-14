import { FC, useState } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from '@material-ui/core';
import { StepLabelText } from './styled';
import useStyles from './styles';
import PaymentForm from './components/PaymentForm';
import ShippingForm from './components/ShippingForm';
import Props from './interfaces/CheckoutReviewProps';
import Inputs from './interfaces/Inputs';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { commerce } from '../../lib/commerce';
import { CheckoutToken } from '@chec/commerce.js/types/checkout-token';

const steps = ['Shipping address', 'Payment details'];

const Checkout: FC<Props> = ({ cart }) => {

  const { line_items } = cart;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [shippingData, setShippingData] = useState<Inputs>();
  const [checkoutToken, setCheckoutToken] = useState<CheckoutToken>();

  useEffect(() => {
      const generateToken = async () => {
        try {

          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
          setCheckoutToken(token);

        } catch(err) {

        }
      }

      generateToken();
  }, [cart])

  const Confirmation = () => {
    return (
      <>
        <div>
          <Typography variant="h5">Thank you for your purchase, firstname lastname</Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">Order ref: ref</Typography>
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" className={classes.button}>Back to home</Button>
      </>
    );
  };

  const nextStep = () =>
    setActiveStep(previousActiveStep => previousActiveStep + 1);
  const backStep = () =>
    setActiveStep(previousActiveStep => previousActiveStep - 1);

  const next = (data: Inputs) => {
    setShippingData(data);

    nextStep();
  };

  const FormToShow = () =>
    activeStep === 0 ? (
      <ShippingForm next={next} checkoutToken={checkoutToken as CheckoutToken} />
    ) : (
      <PaymentForm shippingData={shippingData as Inputs} cart={cart} backStep={backStep} nextStep={nextStep} />
    );

  
  if(line_items.length) {
  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h3" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(step => (
              <Step key={step}>
                <StepLabel>
                  <StepLabelText>{step}</StepLabelText>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <FormToShow />}
        </Paper>
      </main>
    </>
  );
            } else {
              return (
                <div>
                  <h1>Your cart is empty</h1>
                </div>
              )
            }
};

export default Checkout;
