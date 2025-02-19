import AppAdicionaCargaHoraria from '@/presentation/components/botao_adicionar/AppAdicionaCargaHoraria'
import AppAdicionaEspecialidade from '@/presentation/components/botao_adicionar/AppAdicionaEspecialidade'
import AppSelect from '@/presentation/components/input/AppSelect'
import AppTextField from '@/presentation/components/input/AppTextField'
import AppTextFieldController from '@/presentation/components/input/AppTextFieldController'
import AppAdicionaTelefone from '@/presentation/components/botao_adicionar/AppAdicionaTelefone'
import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

const CargaHorariaTab = () => {
    
        
    return (
        <div className='flex flex-col w-full gap-5'>
            <div>
                <AppAdicionaCargaHoraria nameBase='horarios'/>
            </div>
            
        </div>
    )
}

export default CargaHorariaTab