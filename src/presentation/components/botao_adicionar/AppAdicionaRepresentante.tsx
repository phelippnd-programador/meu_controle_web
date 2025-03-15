import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react'
import { Control, FieldValues, useFieldArray, useFormContext } from 'react-hook-form';
import AppSelect from '../input/AppSelect';
import AppTextField from '../input/AppTextField';
import DeleteIcon from '@mui/icons-material/Delete';
import AppTextFieldController from '../input/AppTextFieldController';
import { Add } from '@mui/icons-material';
import AppSelectFieldController from '../input/AppSelectFieldController';
import { enumToOptions, TipoTelefone } from '@/presentation/types/enums';
import AppAdiciona from './AppAdiciona';
import { useCustomSWR } from '@/presentation/hooks/ConsultaFiltro';
import { ItemSelect } from '../input/model/ItemSelect';
import AppDateFieldController from '../input/AppDateFieldController';
import AppAdicionaTelefone from './AppAdicionaTelefone';
interface AppAdicionaRepresentanteProps {
    nameBase: string;
    required:boolean;
}
const AppAdicionaRepresentante: React.FC<AppAdicionaRepresentanteProps> = (props) => {
    const { data, error } = useCustomSWR<ItemSelect[]>('http://localhost:3001/tipo-telefone');
    if (error) return <p>Erro ao carregar opções</p>;
    
    return (
        <AppAdiciona isloaded={!data} required={props.required} title='Adicionar Representante' nameBase={props.nameBase} component={
            (index) => {
                return <>
                    <div className='flex col-span-11 flex-col w-full gap-5'>
                        <div className='w-full gap-10 grid lg:grid-cols-12 grid-cols-1'>
                            <div className='col-span-6'>
                                <AppTextFieldController name={'representante.nome'} label={'Nome'} />
                            </div>
                            <div className='col-span-3'>
                                <AppTextFieldController name={'representante.contato.email'} label={'email'} />
                            </div>
                            <div className='col-span-3'>
                                <AppDateFieldController name={'representante.data_nascimento'} label={'Data Nascimento'} />
                            </div>
                        </div>
                        <AppAdicionaTelefone nameBase={'representante.contato.telefone'} />
                    </div>
                </>
            }
        } />
    )
}

export default AppAdicionaRepresentante