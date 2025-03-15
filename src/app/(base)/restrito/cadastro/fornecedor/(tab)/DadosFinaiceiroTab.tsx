import AppAdicionaCargaHoraria from '@/presentation/components/botao_adicionar/AppAdicionaCargaHoraria'
import AppAdicionaEspecialidade from '@/presentation/components/botao_adicionar/AppAdicionaEspecialidade'
import AppDateFieldController from '@/presentation/components/input/AppDateFieldController'
import AppSelect from '@/presentation/components/input/AppSelect'
import AppTextField from '@/presentation/components/input/AppTextField'
import AppTextFieldController from '@/presentation/components/input/AppTextFieldController'
import AppAdicionaTelefone from '@/presentation/components/botao_adicionar/AppAdicionaTelefone'
import { Add } from '@mui/icons-material'
import { Button, Divider } from '@mui/material'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import AppSelectFieldController from '@/presentation/components/input/AppSelectFieldController'
import AppAdicionaDadosBancarios from '@/presentation/components/botao_adicionar/AppAdicionaDadosBancarios'
interface DadosFinaiceiroTabProps {
    isDataLoaded?: boolean;
}
const DadosFinaiceiroTab: React.FC<DadosFinaiceiroTabProps> = ({ isDataLoaded }) => {

    return (
        <div className='flex flex-col w-full gap-5'>

            <div className='gap-10 grid lg:grid-cols-12 grid-cols-1'>
                <div className='col-span-7'>
                    <AppTextFieldController isLoaded={!isDataLoaded} name={'dados_financeiros.forma_pagamento'} label={'Forma de pagamento'} />
                </div>
            </div>
            <Divider />
            <AppAdicionaDadosBancarios nameBase={'dados_financeiros.dados_bancarios'} />

        </div>
    )
}

export default DadosFinaiceiroTab