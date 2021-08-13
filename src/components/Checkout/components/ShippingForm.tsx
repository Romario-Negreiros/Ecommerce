import { FC, useState } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';
import { Link } from 'react-router-dom';
import useStyles from '../styles';
import Props from '../interfaces/ShippingFormProps';
import Inputs from '../interfaces/Inputs';

const ShippingForm: FC<Props> = ({ next }) => {

    const classes = useStyles();
    const methods = useForm<Inputs>();

    return (
     <>
        <Typography variant="h6" gutterBottom>Shipping address</Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(data => next({ ...data }))}>
                <Grid container spacing={3}>
                    <FormInput name="firstName" label="First name" />
                    <FormInput name="lastName" label="Last name" />
                    <FormInput name="address1" label="Address" />
                    <FormInput name="email" label="Email" />
                    <FormInput name="city" label="City" />
                    <FormInput name="zip" label="ZIP / Postal Code" />
                </Grid>
                <br />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                    <Button type="submit" className={classes.button} variant="contained">Next</Button>
                </div>
            </form>    
        </FormProvider>   
     </>   
    )
}

export default ShippingForm;