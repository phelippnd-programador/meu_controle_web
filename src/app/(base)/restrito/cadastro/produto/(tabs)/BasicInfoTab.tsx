import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, MenuItem } from '@mui/material';

const categories = [
  { value: 'categoria1', label: 'Categoria 1' },
  { value: 'categoria2', label: 'Categoria 2' },
  // Adicione mais categorias conforme necessário
];

const BasicInfoTab = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div>
      <Controller
        name="productName"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Nome do Produto" fullWidth margin="normal" error={!!errors.productName}
         helperText={errors.productName?.message as string} 
         />
        }
      />
      <Controller
        name="productCode"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Código do Produto" fullWidth margin="normal" error={!!errors.productCode} helperText={errors.productCode?.message as string} />}
      />
      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Descrição" fullWidth multiline rows={4} margin="normal" error={!!errors.description} helperText={errors.description?.message as string} />}
      />
      <Controller
        name="category"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField {...field} label="Categoria" select fullWidth margin="normal" error={!!errors.category} helperText={errors.category?.message as string}>
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </div>
  );
};

export default BasicInfoTab;
