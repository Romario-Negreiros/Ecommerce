import { FC } from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
import Props from '../interfaces/FormInputProps';

const FormInput: FC<Props> = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({field}) => (
          <TextField {...field} fullWidth={true} label={label} required={true} />
        )}
        defaultValue=""
        control={control}
        name={name}
      />
    </Grid>
  );
};

export default FormInput;
