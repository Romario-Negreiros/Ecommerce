import { FC, useState, useEffect } from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';
import { Link } from 'react-router-dom';
import useStyles from '../styles';
import Props from '../interfaces/ShippingFormProps';
import Inputs from '../interfaces/Inputs';
import { commerce } from '../../../lib/commerce';

type shippingTypes = {
  [name: string]: string;
};

const ShippingForm: FC<Props> = ({ next, checkoutToken }) => {
  const [shippingCountries, setShippingCountries] = useState<shippingTypes>();
  const [shippingCountry, setShippingCountry] = useState<string>('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState<shippingTypes>();
  const [shippingSubdivision, setShippingSubdivision] = useState<string>('');
  const [shippingOption, setShippingOption] = useState<string>('');

  const countries: { id: string; label: string }[] | undefined =
    shippingCountries &&
    Object.entries(shippingCountries).map(([code, name]) => ({
      id: code,
      label: name,
    }));
  const subdivisions: { id: string; label: string }[] | undefined =
    shippingSubdivisions &&
    Object.entries(shippingSubdivisions).map(([code, name]) => ({
      id: code,
      label: name,
    }));

  const fetchShippingCountries = async (checkoutTokenId: string) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[18]);
  };

  const fetchSubdivisions = async (countryCode: string) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken.id]);

  useEffect(() => {
    if (shippingCountry) {
      fetchSubdivisions(shippingCountry)
      shippingCountry === 'US' ? setShippingOption('Domestic - $0,00') : setShippingOption('International - $10,00')
    };
    
  }, [shippingCountry]);

  const classes = useStyles();
  const methods = useForm<Inputs>();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(data => {
            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption
            })
          }
          )}
        >
          <Grid container spacing={3}>
            <FormInput name="firstName" label="First name" />
            <FormInput name="lastName" label="Last name" />
            <FormInput name="address1" label="Address" />
            <FormInput name="email" label="Email" />
            <FormInput name="city" label="City" />
            <FormInput name="zip" label="ZIP / Postal Code" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(
                  event: React.ChangeEvent<{
                    name?: string | undefined;
                    value: unknown;
                  }>
                ) => setShippingCountry(event.target.value as string)}
              >
                {countries?.map(country => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Division</InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(
                  event: React.ChangeEvent<{
                    name?: string | undefined;
                    value: unknown;
                  }>
                ) => setShippingSubdivision(event.target.value as string)}
              >
                {subdivisions?.map(subdivision => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel>Shipping Option</InputLabel>
                <Typography gutterBottom>
                  {shippingOption}
                </Typography>
              </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} to="/cart" variant="outlined">
              Back to Cart
            </Button>
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
            >
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default ShippingForm;
