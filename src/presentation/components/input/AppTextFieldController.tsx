import { Skeleton, TextField, TextFieldProps } from '@mui/material'
import React, { useEffect } from 'react'
import { Control, Controller, FieldValues, useFormContext } from 'react-hook-form'
import AppTextField from './AppTextField';
import { json } from 'node:stream/consumers';
import { Prosto_One } from 'next/font/google';

interface AppTextFieldControllerProps {
  name: string;
  label: string;
  type?: string;
  className?: string;
  isLoaded?: boolean;
}

const AppTextFieldController: React.FC<AppTextFieldControllerProps> = (props) => {
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
        props.isLoaded? <Skeleton className="h-10 w-full" />:
        <>
          
          <AppTextField {...field}
            className={`${props.className} min-w-28`}
            type={`${props.type && props.type}`}
            label={props.label} fullWidth margin="normal"
            error={!!mensagemError(errors)}
            // error={!!errors[props.name]}
            helperText={mensagemError(errors)} />
        </>

      }
    />

  )
}

export default AppTextFieldController