'use client'
import { Button, IconButton } from '@mui/material';
import React from 'react'
import { Control, FieldValues, useFieldArray, useFormContext } from 'react-hook-form';
import AppSelect from '../input/AppSelect';
import AppTextField from '../input/AppTextField';
import DeleteIcon from '@mui/icons-material/Delete';
import AppTextFieldController from '../input/AppTextFieldController';
import { Add } from '@mui/icons-material';
import AppTimeFieldController from '../input/AppTimeFieldController';
import AppTimeField from '../input/AppTimeField';
import { DiaSemana, enumToOptions } from '@/presentation/types/enums';
import AppSelectFieldController from '../input/AppSelectFieldController';
import AppAdiciona from './AppAdiciona';
interface AppAdicionaCargaHorariaProps {
    nameBase: string;
}
const AppAdicionaCargaHoraria: React.FC<AppAdicionaCargaHorariaProps> = (props) => {
    const { control, formState: { errors } } = useFormContext() as { control: Control<FieldValues>, formState: { errors: Record<string, any> } };
    const { fields, append, remove } = useFieldArray({
        control,
        name: props.nameBase // Nome do array no formulário
    });
    return (
        <AppAdiciona required={true} title='Adicionar Especialidade' nameBase={props.nameBase} component={
            (index) => {
                return <>

                    <div className='lg:col-span-6'>
                        <AppSelectFieldController name={`${props.nameBase}.${index}.diasSemana`} itens={enumToOptions(DiaSemana)} id='tipo_dele' label={"Dia da Semana"} />
                    </div>
                    <div className='lg:col-span-2'>
                        <AppTimeFieldController name={`${props.nameBase}.${index}.de`} label={'De'} />
                    </div>
                    <div className='lg:col-span-2'>
                        <AppTimeFieldController name={`${props.nameBase}.${index}.ate`} label={'Até'} />
                    </div>

                </>
            }
        } />
    )
}

export default AppAdicionaCargaHoraria