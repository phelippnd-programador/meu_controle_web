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

        <>
            <div className='flex w-full'>
                <Button onClick={() => append({})} className='' fullWidth variant='contained' color='primary' startIcon={<Add />}>Adicionar Carga Horaria</Button>
            </div>
            <div className='flex flex-col gap-2 border border-gray-300 py-3 '>
                {
                    fields.map((field, index) => (
                        <div key={index} className='items-end gap-5 grid lg:grid-cols-12 grid-cols-1  px-3 border-b pb-2 shadow-sm border-gray-300'>
                            <div className='lg:col-span-2 flex justify-center items-center'>
                                <IconButton className='text-red-500' onClick={() => remove(fields.findIndex(f => f.id === field.id))} ><DeleteIcon /></IconButton>
                                {/* <Button className='' fullWidth variant='contained' color='error' startIcon={<DeleteIcon />}>Remover Telefone</Button> */}
                            </div>

                            <div className='lg:col-span-4'>
                                <AppSelectFieldController  name={`${props.nameBase}.${index}.diasSemana`}  itens={enumToOptions(DiaSemana)} id='tipo_dele' label={"Dia da Semana"}/>
                            </div>
                            <div className='lg:col-span-3'>
                                <AppTimeFieldController  name={`${props.nameBase}.${index}.de`} label={'De'} />
                            </div>
                            <div className='lg:col-span-3'>
                                <AppTimeFieldController name={`${props.nameBase}.${index}.ate`} label={'Até'} />
                            </div>


                        </div>
                    ))
                }


            </div>
        </>
    )
}

export default AppAdicionaCargaHoraria