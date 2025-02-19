'use client'
import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, MobileTimePicker, MobileTimePickerProps, TimePicker } from '@mui/x-date-pickers';
interface AppTimeFieldProps extends MobileTimePickerProps<Dayjs> {
  helperText?: string;
  error?: boolean;
}

const AppTimeField: React.FC<AppTimeFieldProps> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileTimePicker
        {...props}
        ampm={false}
        className='w-full'
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
    </LocalizationProvider>
  )
}

export default AppTimeField