import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const InvoiceInfoTab = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div>
      <Controller
        name="barcode"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Código de Barras" fullWidth margin="normal" error={!!errors.barcode} helperText={errors.barcode?.message as string} />}
      />
      <Controller
        name="manufacturerCNPJ"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="CNPJ do Fabricante" fullWidth margin="normal" error={!!errors.manufacturerCNPJ} helperText={errors.manufacturerCNPJ?.message as string} />}
      />
      <Controller
        name="manufactureDate"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Data de Fabricação" type="date" fullWidth InputLabelProps={{ shrink: true }} margin="normal" error={!!errors.manufactureDate} helperText={errors.manufactureDate?.message as string} />}
      />
      <Controller
        name="expirationDate"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Data de Validade" type="date" fullWidth InputLabelProps={{ shrink: true }} margin="normal" error={!!errors.expirationDate} helperText={errors.expirationDate?.message as string} />}
      />
    </div>
  );
};

export default InvoiceInfoTab;
