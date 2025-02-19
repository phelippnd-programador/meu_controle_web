import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'

const AppTextField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      helperText={props.helperText}
      className='w-full m-0'
      fullWidth
      variant="standard"
      InputProps={{
        classes: {
          input: "px-2 w-full", // Classe Tailwind para ajustar o padding
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

    </TextField>
  )
}

export default AppTextField