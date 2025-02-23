'use client'
import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, MobileDatePicker, MobileDatePickerProps, MobileTimePicker, MobileTimePickerProps, TimePicker } from '@mui/x-date-pickers';
interface AppDataFieldProps extends MobileDatePickerProps<Dayjs> {
  helperText?: string;
  error?: boolean;
}

const AppDataField: React.FC<AppDataFieldProps> = (props) => {
  return (

    <MobileDatePicker
      {...props}
      className='w-full'
      // onChange={(event)=>{ console.log("Evento Date",event)}}
      slotProps={{
        textField: {
          InputProps: {
            className: "px-2 w-full" // Classe Tailwind para ajustar o padding
          },
          label: props.label,
          helperText: props.helperText,
          variant: "standard",
          fullWidth: true,
          error: props.error,
        }
      }}

    />

  )
}

export default AppDataField