'use client'
import Filtro from '@/presentation/components/filtro/Filtro'
import AppTextField from '@/presentation/components/input/AppTextField'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
interface FiltroClientProps {
    onOpenNovo:()=>void;
};

const FiltroCliente:React.FC<FiltroClientProps> = (props) => {
    const [openCadastro, setOpenCadastro] = useState<boolean>(false);
    
    const methods = useForm({
        // resolver: zodResolver(schema),
    });
    return (
        <FormProvider {...methods}>
            <Filtro  onFilter={() => { } } onOpenNovo={props.onOpenNovo}
            inputs={[{
                name: "appTextField", render: ({ field }) => (
                    <AppTextField {...field} />
                )
            }]} title={'Pesquisa'} />
            
        </FormProvider>
    )
}

export default FiltroCliente