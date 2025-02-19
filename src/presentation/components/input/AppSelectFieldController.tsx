'use client'
import { TextField, TextFieldProps } from '@mui/material'
import React, { useEffect } from 'react'
import { Control, Controller, FieldValues, useFormContext } from 'react-hook-form'
import AppTextField from './AppTextField';
import { json } from 'node:stream/consumers';
import { Prosto_One } from 'next/font/google';
import AppSelect from './AppSelect';
import { ItemSelect } from './model/ItemSelect';

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
interface AppSelectFieldControllerProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  className?: string;
  itens?: ItemSelect | ItemSelect[];
}

const AppSelectFieldController: React.FC<AppSelectFieldControllerProps> = (props) => {
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
      defaultValue=""
      render={({ field }) =>
        <>
          <AppSelect
            {...field}
            id={props.id}
            itens={props.itens}
            className={props.className}
            type={`${props.type && props.type}`}
            label={props.label} fullWidth
            error={!!mensagemError(errors)}
            helperText={mensagemError(errors)}

          />
        </>

      }
    />

  )
}

export default AppSelectFieldController