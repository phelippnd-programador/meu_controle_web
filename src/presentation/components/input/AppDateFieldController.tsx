import { TextField, TextFieldProps } from '@mui/material'
import React, { useEffect } from 'react'
import { Control, Controller, FieldValues, useFormContext } from 'react-hook-form'
import AppTextField from './AppTextField';
import { json } from 'node:stream/consumers';
import { Prosto_One } from 'next/font/google';
import AppTimeField from './AppTimeField';
import dayjs from 'dayjs';
import AppDataField from './AppDataField';

{/* <TextField
      {...props}
      className='w-full'
      variant="standard"
      InputProps={{
        classes: {
          input: "p-2 w-full", // Classe Tailwind para ajustar o padding
        },
      }}
    // slotProps={{

    //   input: {
    //     className:"p-1"
    //   }
    //   // input: {
    //   //   className: "p-2", // Classe Tailwind para ajustar o padding
    //   // },
    // }}
    >

    </TextField> */}
interface AppDateFieldControllerProps {
  name: string;
  label: string;
  type?: string;
  className?: string;
}

const AppDateFieldController: React.FC<AppDateFieldControllerProps> = (props) => {
  const { control, formState: { errors } } = useFormContext() as { control: Control<FieldValues>, formState: { errors: Record<string, any> } };
  const mensagemError = (errors: Record<string, any>): string | undefined => {
    if (props.name.includes(".")) {
      const nameParts = props.name.split(".");
      let error = errors;
      for (const part of nameParts) {
        error = error?.[part];
        if (!error) break;
      }
      return error?.message as string;
    } else {
      return errors[props.name]?.message as string
    }
  }
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field }) =>
        <>
          {/* <AppTimeField name={'de'} label={'De'} /> */}
          <AppDataField
            {...field}
            value={field.value ? dayjs(field.value, "DD/MM/YYYY") : null} // 🔥 Converte corretamente!
            onChange={(newValue) => field.onChange(newValue ? newValue.format("DD/MM/YYYY") : '')} // Mantém o formato correto
          
            // value={field.value ? dayjs(field.value, 'dd/MM/yyyy') : null} // Converte para Dayjs
            // onChange={(newValue) => field.onChange(newValue ? dayjs(newValue).format('dd/MM/yyyy') : '')} // Converte para string
        
            className={props.className}
            label={props.label}
            error={!!mensagemError(errors)}
            // error={!!errors[props.name]}
            helperText={mensagemError(errors)} />
        </>

      }
    />

  )
}

export default AppDateFieldController