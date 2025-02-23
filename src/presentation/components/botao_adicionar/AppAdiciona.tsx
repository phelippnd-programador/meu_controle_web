import { Button, IconButton } from '@mui/material';
import React, { ReactNode, useState } from 'react'
import { Control, FieldValues, useFieldArray, useFormContext } from 'react-hook-form';
import AppSelect from '../input/AppSelect';
import AppTextField from '../input/AppTextField';
import DeleteIcon from '@mui/icons-material/Delete';
import AppTextFieldController from '../input/AppTextFieldController';
import { Add } from '@mui/icons-material';
import AppSelectFieldController from '../input/AppSelectFieldController';
import { enumToOptions, TipoTelefone } from '@/presentation/types/enums';
interface AppAdicionaProps {
    nameBase: string;
    component: (index: number) => ReactNode;
    title:string;
    required?:boolean;
}
const AppAdiciona: React.FC<AppAdicionaProps> = (props) => {
    const { control, formState: { errors } } = useFormContext() as { control: Control<FieldValues>, formState: { errors: Record<string, any> } };
    const { fields, append, remove } = useFieldArray({
        control,
        name: props.nameBase,
        
    });
    if (fields.length === 0 && props.required ) {
        append({});

    }
    const remover = (fields: Record<"id", string>[], field: Record<"id", string>) => {
        console.log("Field", field);
        let index = fields.findIndex(v => v.id === field.id)
        console.log("INDEX", index);
        if (index !== -1) {
            remove(index);
            console.log("Depois da remoção:", fields);
        } else {
            console.warn("Item não encontrado para remoção:", field);
        }
    }
    return (

        <>
            <div className='flex w-full'>
                <Button onClick={() => append({})} className='' fullWidth variant='contained' color='primary' startIcon={<Add />}>{props.title}</Button>
            </div>
            {fields && fields.length > 0 &&

                <div className='flex flex-col gap-2 border border-gray-300 py-3 '>
                    {
                        fields.map((field, index) => (
                            <div key={field.id} className='items-end gap-5 grid lg:grid-cols-12 grid-cols-1  px-3 border-b pb-2 shadow-sm border-gray-300'>
                                <div className='lg:col-span-1 flex justify-center items-center'>
                                    <IconButton className='text-red-500' onClick={() => remover(fields, field)} ><DeleteIcon /></IconButton>

                                    {/* <Button className='' fullWidth variant='contained' color='error' startIcon={<DeleteIcon />}>Remover Telefone</Button> */}
                                </div>
                                {props.component(index)}



                            </div>
                        ))
                    }


                </div>
            }
        </>
    )
}

export default AppAdiciona