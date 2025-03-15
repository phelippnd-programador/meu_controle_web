import { Button } from '@mui/material'
import React from 'react'
import { useFormContext } from 'react-hook-form'

const FooterButtonTabs = () => {
    const form =useFormContext();
    return (
        <div className='flex justify-end gap-4'>
            <Button
                 onClick={()=> form.reset() }           
                variant="contained" color="error">
                Limpar
            </Button>
            <Button type="submit" variant="contained" color="primary">
                Salvar
            </Button>
        </div>
    )
}

export default FooterButtonTabs