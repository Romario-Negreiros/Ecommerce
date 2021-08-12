import { FC, useState } from 'react';
import {
  Wrapper,
  Form,
  InputWrapper,
  Input,
  InputLabel,
  Fieldset,
  Legend,
  Button,
  Error,
} from './styles';
import { Portal, Modal } from './components/index';
import { useForm, SubmitHandler } from 'react-hook-form';
import Props from './interfaces/Props';

type Inputs = {
  country: string;
  city: string;
  zipcode: string;
  paymentmethod: string
};

const Checkout: FC<Props> = ({ productsOnCart }) => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = () => {
    setShowModal(true)
    reset({country: '', city: '', zipcode: '', paymentmethod: ''})
  };


  if (productsOnCart?.length) {
    const getTotalPrice = productsOnCart.reduce(
      (a, product) => a + product.price * product.quantity,
      0
    );
    const getTotalItems = productsOnCart.reduce(
      (a, product) => a + product.quantity,
      0
    );
    return (
      <Wrapper>
        {showModal && (
          <Portal>
            <Modal
              setShowModal={setShowModal}
              totalPrice={getTotalPrice}
              totalItems={getTotalItems}
            />
          </Portal>
        )}

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Fieldset>
            <Legend>Shipping info</Legend>
            <InputWrapper>
              <InputLabel htmlFor="country">Country</InputLabel>
              <Input
                aria-placeholder="Country"
                {...register('country', { required: 'City field is required' })}
              />
              {errors.country && <p>{errors.country.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <InputLabel htmlFor="city">City</InputLabel>
              <Input
                aria-placeholder="City"
                {...register('city', { required: 'Country field is required' })}
              />
              {errors.city && <p>{errors.city.message}</p>}
            </InputWrapper>
            <InputWrapper>
              <InputLabel htmlFor="zipcode">Zip code</InputLabel>
              <Input
                aria-placeholder="Zip code"
                {...register('zipcode', {
                  required: 'Zip code field is required',
                  pattern: {
                    value: /^[0-9]{5}[-]{1}[0-9]{3,4}$/,
                    message: 'Invalid format',
                  },
                })}
              />
              {errors.zipcode && <p>{errors.zipcode.message}</p>}
            </InputWrapper>
          </Fieldset>
          <Fieldset>
            <Legend>Payment info</Legend>
                <InputWrapper>
                  <InputLabel htmlFor="paymentmethod">Payment method</InputLabel>
                  <Input aria-placeholder='Payment method' {...register('paymentmethod', { required: 'You must choose a payment method' })} />  
                  {errors.paymentmethod && <p>{errors.paymentmethod.message}</p>}     
                </InputWrapper>
            </Fieldset>
          <Button type="submit">Confirm and pay</Button>
        </Form>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Error>Your cart is empty!</Error>
      </Wrapper>
    );
  }
};

export default Checkout;
