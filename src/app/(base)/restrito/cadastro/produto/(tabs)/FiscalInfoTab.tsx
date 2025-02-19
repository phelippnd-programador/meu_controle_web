import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, MenuItem } from '@mui/material';

const FiscalInfoTab = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div>
      <Controller
        name="ncm"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="NCM" fullWidth margin="normal" error={!!errors.ncm} helperText={errors.ncm?.message as string} />}
      />
      <Controller
        name="cfop"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="CFOP" fullWidth margin="normal" error={!!errors.cfop} helperText={errors.cfop?.message as string} />}
      />
      <Controller
        name="cst"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="CST" fullWidth margin="normal" error={!!errors.cst} helperText={errors.cst?.message as string} />}
      />
      <Controller
        name="productOrigin"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} label="Origem do Produto" select fullWidth margin="normal" error={!!errors.productOrigin} helperText={errors.productOrigin?.message as string}>
            <MenuItem value="nacional">Nacional</MenuItem>
            <MenuItem value="importado">Importado</MenuItem>
          </TextField>
        )}
      />
    </div>
  );
};

export default FiscalInfoTab;
