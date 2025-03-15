import AppAdicionaCargaHoraria from '@/presentation/components/botao_adicionar/AppAdicionaCargaHoraria'
import AppAdicionaEspecialidade from '@/presentation/components/botao_adicionar/AppAdicionaEspecialidade'
import AppDateFieldController from '@/presentation/components/input/AppDateFieldController'
import AppSelect from '@/presentation/components/input/AppSelect'
import AppTextField from '@/presentation/components/input/AppTextField'
import AppTextFieldController from '@/presentation/components/input/AppTextFieldController'
import AppAdicionaTelefone from '@/presentation/components/botao_adicionar/AppAdicionaTelefone'
import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import AppSelectFieldController from '@/presentation/components/input/AppSelectFieldController'
import AppAdicionaRepresentante from '@/presentation/components/botao_adicionar/AppAdicionaRepresentante'
interface RepresentateTabProps {
    isDataLoaded?: boolean;
}
const RepresentateTab: React.FC<RepresentateTabProps> = ({ isDataLoaded }) => {

    if (!isDataLoaded) return <p>Carregando...</p>;
    return (
        <div className='flex flex-col w-full gap-5'>

            <AppAdicionaRepresentante required={false} nameBase='representante' />


        </div>
    )
}

export default RepresentateTab