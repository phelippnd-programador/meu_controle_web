import { TextField } from '@mui/material';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';

const MaquininhaTab = () => {
    const { control, formState: { errors } } = useFormContext();
    return (
        <div>
            <Controller
                name=''
                control={control}
                defaultValue={''}
                render={(field) =>
                    <TextField {...field} label="Nome do Produto" fullWidth margin="normal" error={!!errors.productName}
                        helperText={errors.productName?.message as string}
                    />}>

            </Controller>
        </div>
    )
}

export default MaquininhaTab