import Filtro from '@/presentation/components/filtro/Filtro'
import AppSelect from '@/presentation/components/input/AppSelect'
import AppTextField from '@/presentation/components/input/AppTextField'
import { MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
interface FiltroProps {
    onOpenNovo:()=>void;
};
const FiltroConsulta:React.FC<FiltroProps> = (props) => {
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
            },{
                name: "appTextField", render: ({ field }) => (
                    <AppTextField {...field} />
                )
            }]} title={'Pesquisa'} />
            
        </FormProvider>
    )
}

export default FiltroConsulta