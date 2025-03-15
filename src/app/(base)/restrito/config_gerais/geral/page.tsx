import Tab from '@/presentation/components/tab/Tab';
import { zodResolver } from '@hookform/resolvers/zod';
import { Tabs } from '@mui/material';
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod';
const schema = z.object({});
const page = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    // Aqui você pode integrar a lógica para emitir NFe com os dados do produto
  };
  const handleChange = (event: React.ChangeEvent<{}>, newIndex: number) => {

  }
  return (
    <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Tabs onChange={handleChange} value={1}>
          <Tab label={''} />
        </Tabs>
      </form>
    </FormProvider>
  )
}

export default page