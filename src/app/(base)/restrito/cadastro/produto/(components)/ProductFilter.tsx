'use client'

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
const categories = [
  { value: 'categoria1', label: 'Categoria 1' },
  { value: 'categoria2', label: 'Categoria 2' },
  // Adicione mais categorias conforme necessário
];

interface FilterProps {
  onFilter: (data: any) => void;
}

const ProductFilter: React.FC<FilterProps> = ({ onFilter }) => {
  const { control, handleSubmit, reset } = useForm();
  const router = useRouter();
  const onSubmit = (data: any) => {
    onFilter(data);
  };

  const handleReset = () => {
    reset();
    onFilter({});
  };
  const handleNovo = () => {
    router.push("/restrito/produto/cadastro");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-4 shadow-md rounded-md">
      <Box display="flex" flexDirection="column" gap={3}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Nome do Produto"
              fullWidth
              variant="outlined"
              className="mb-2"
            />
          )}
        />
        <Controller
          name="category"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Categoria"
              select
              fullWidth
              variant="outlined"
              className="mb-2"
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <div className='flex justify-end gap-4'>
          <Button

            type="submit"
            variant="contained"
            color="primary"
            className="px-10 bg-blue-600 hover:bg-blue-700"
          >
            Filtrar
          </Button>
          <Button
            onClick={handleReset}
            variant="outlined"
            color="secondary"
            className="px-10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            Limpar
          </Button>
          <Button
            onClick={handleNovo}
            variant="outlined"
            color="secondary"
            className="px-10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            Novo
          </Button>
        </div>
      </Box>
    </form>
  );
};

export default ProductFilter;
