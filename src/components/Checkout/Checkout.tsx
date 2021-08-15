import { FC, useState } from 'react';
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Button,
} from '@material-ui/core';
import { StepLabelText } from './styled';
import useStyles from './styles';
import PaymentForm from './components/PaymentForm';
import ShippingForm from './components/ShippingForm';
import Props from './interfaces/CheckoutProps';
import Inputs from './interfaces/Inputs';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { commerce } from '../../lib/commerce';
import { CheckoutToken } from '@chec/commerce.js/types/checkout-token';
import refreshCart from './modules/refreshCart';
import { Error, Wrapper } from '../Home/styles';

const steps = ['Shipping address', 'Payment details'];

const Checkout: FC<Props> = ({ cart, setCart }) => {
  const { line_items } = cart;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [shippingData, setShippingData] = useState<Inputs>();
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [checkoutToken, setCheckoutToken] = useState<CheckoutToken>();

  const timeout = (timeout: number) => {
    setTimeout(() => {
      setIsFinished(true);
    }, timeout);
  };

  const history = useHistory();

  useEffect(() => {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: 'cart',
          });
          setCheckoutToken(token);
        } catch (err) {
          timeout(6000);
          history.push('/');
        }
      };

      generateToken();
  }, [cart, history]);

  const Confirmation = () =>
    isFinished ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase {shippingData?.firstName}{' '}
            {shippingData?.lastName}
          </Typography>
        </div>
        <br />
        <Button
          component={Link}
          to="/"
          variant="outlined"
          className={classes.button}
          onClick={() => refreshCart(setCart)}
        >
          Back to home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

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
      <ShippingForm
        next={next}
        checkoutToken={checkoutToken as CheckoutToken}
      />
    ) : (
      <PaymentForm
        timeout={timeout}
        checkoutToken={checkoutToken as CheckoutToken}
        backStep={backStep}
        nextStep={nextStep}
      />
    );

  if (line_items.length) {
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
            {activeStep === steps.length ? (
              <Confirmation />
            ) : (
              checkoutToken && <FormToShow />
            )}
          </Paper>
        </main>
      </>
    );
  } else {
    return (
      <Wrapper>
        <Error>Your cart is empty</Error>
      </Wrapper>
    );
  }
};

export default Checkout;
