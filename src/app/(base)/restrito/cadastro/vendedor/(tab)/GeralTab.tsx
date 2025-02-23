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

const GeralTab = () => {
    const { control } = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "contato.telefone" // Nome do array no formulário
    });
    return (
        <div className='flex flex-col w-full gap-5'>

            <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppTextFieldController name={'pessoais.nome'} label={'Nome'} />
                <AppDateFieldController name={'pessoais.data_nascimento'} label={'Data Nascimento'} />
                <AppTextFieldController name={'contato.email'} label={'email'} />

            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2'>

                <div>
                    <AppAdicionaEspecialidade nameBase={'especialidades'} />
                </div>
                <div className='p-0'>
                    <AppAdicionaTelefone nameBase='contato.telefone' />
                </div>
            </div>
        </div>
    )
}

export default GeralTab