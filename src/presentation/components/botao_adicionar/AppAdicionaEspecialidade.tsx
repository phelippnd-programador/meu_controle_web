import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react'
import { Control, FieldValues, useFieldArray, useFormContext } from 'react-hook-form';
import AppSelect from '../input/AppSelect';
import AppTextField from '../input/AppTextField';
import DeleteIcon from '@mui/icons-material/Delete';
import AppTextFieldController from '../input/AppTextFieldController';
import { Add } from '@mui/icons-material';
import AppSelectFieldController from '../input/AppSelectFieldController';
import { M_PLUS_1 } from 'next/font/google';
import AppAdiciona from './AppAdiciona';
import { ItemSelect } from '../input/model/ItemSelect';
import useSWR from 'swr';
import useCustomSWR from '@/presentation/hooks/ConsultaFiltro';
interface AppAdicionaEspecialidadeProps {
    nameBase: string;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const AppAdicionaEspecialidade: React.FC<AppAdicionaEspecialidadeProps> = (props) => {
    const { data, error } = useCustomSWR<ItemSelect[]>('http://localhost:3001/tipo-especialidade',undefined,{dedupingInterval: 600000});
    if (error) return <p>Erro ao carregar opções</p>;
    if (!data) return <p>Carregando...</p>;

    return (
        <AppAdiciona required={true} title='Adicionar Especialidade' nameBase={props.nameBase} component={
            (index) => {
                return <>
                    <div className="lg:col-span-10">
                        <AppSelectFieldController itens={data} id={`especialidade_${index}`} name={`${props.nameBase}.${index}.id`} label={'Especialidade'} />
                    </div>
                </>
            }
        } />

    )
}

export default AppAdicionaEspecialidade


