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
import { ItemSelect } from '@/presentation/components/input/model/ItemSelect'
import { useCustomSWR } from '@/presentation/hooks/ConsultaFiltro'
interface GeralTabProps {
    isDataLoaded?: boolean;
}
const GeralTab: React.FC<GeralTabProps> = ({ isDataLoaded }) => {

    if (!isDataLoaded) return <p>Carregando...</p>;
    const { data: dataTipoCatedoriaFornecedor, error: errorTipoCatedoriaFornecedor } = useCustomSWR<ItemSelect[]>('http://localhost:3001/tipo-categoria-fornecedor', undefined, { dedupingInterval: 600000 });

    return (
        <div className='flex flex-col w-full gap-5'>

            <div className='gap-10 grid lg:grid-cols-12 grid-cols-1'>
                <div className='col-span-9'>
                    <AppTextFieldController name={'pessoais.nome'} label={'Nome'} />
                </div>
                <div className='col-span-3'>
                    <AppTextFieldController name={'pessoais.cpf'} label={'CPF'} />
                </div>
            </div>
            <div className='gap-10 grid lg:grid-cols-12 grid-cols-1'>
                <div className='col-span-7'>
                    <AppTextFieldController name={'contato.email'} label={'E-mail'} />
                </div>
                <div className='col-span-5'>
                    <AppDateFieldController name={'pessoais.data_nascimento'} label={'Data Nascimento'} />
                </div>
            </div>
            <AppAdicionaTelefone nameBase={'contato.telefone'} />

        </div>
    )
}

export default GeralTab