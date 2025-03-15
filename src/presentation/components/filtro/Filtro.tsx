'use client'

import React, { ReactNode } from 'react';
import { useForm, Controller, useFormContext } from 'react-hook-form';
import { TextField, Button, MenuItem, Box, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import FiltroInput from './FiltroInput';
import { useFlags } from '@/presentation/hooks/FlagProvider';
const categories = [
  { value: 'categoria1', label: 'Categoria 1' },
  { value: 'categoria2', label: 'Categoria 2' },
  // Adicione mais categorias conforme necessário
];

interface FilterProps {
  onFilter: (data: any) => void;
  inputs: FiltroInput[];
  title: string;
  nomeFlag: string;
}

const Filtro: React.FC<FilterProps> = ({ onFilter, nomeFlag, inputs, title }) => {
  const { control, handleSubmit, reset, formState: { errors } } = useFormContext();
  const { setFlag } = useFlags();
  const onSubmit = (data: any) => {
    onFilter(data);
  };

  const handleReset = () => {
    reset();
    onFilter({});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white justify-center md:items-end items-center  shadow-md p-0 m-0 gap-4 flex flex-col">
      <Accordion className='w-full '>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className='hover:bg-gray-800 w-full bg-gray-600 shadow-sm   font-bold text-lg text-white  m-0'
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
          <div className="flex justify-between gap-5 flex-wrap">
            {inputs.map((v, index) =>
              <div className="min-w-96 flex-grow " key={index}>
                <Controller
                  key={index}
                  {...inputs}
                  name={v.name}
                  control={control}
                  render={v.render}

                />

              </div>
            )}

          </div>
        </AccordionDetails>
      </Accordion>

      <div className='flex justify-end gap-4 px-3'>
        <Button

          type="submit"
          variant="contained"
          color="primary"
          className="w-full px-10 bg-blue-600 hover:bg-blue-700"
        >
          Filtrar
        </Button>
        <Button
          onClick={handleReset}
          variant="outlined"
          color="secondary"
          className="w-full px-10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
        >
          Limpar
        </Button>
        <Button
          onClick={() => { setFlag(nomeFlag, true) }}
          variant="outlined"
          color="secondary"
          className="w-full  px-10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
        >
          Novo
        </Button>
      </div>
    </form>
  );
};

export default Filtro;
