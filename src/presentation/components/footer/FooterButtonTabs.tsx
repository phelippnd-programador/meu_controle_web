import { Button } from '@mui/material'
import React from 'react'

const FooterButtonTabs = () => {
    return (
        <div className='flex justify-end gap-4'>
            <Button
                //  onClick={methods.reset} 
                
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