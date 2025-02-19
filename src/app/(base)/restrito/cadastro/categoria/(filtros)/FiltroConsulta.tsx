import AppSelect from '@/presentation/components/input/AppSelect'
import AppTextField from '@/presentation/components/input/AppTextField'
import { MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const FiltroConsulta = () => {
    return (
        <div className='flex gap-4'>
            <button> </button>
            <button> </button>
            <Select>
                <MenuItem>10</MenuItem>
                <MenuItem>20</MenuItem>
                <MenuItem>50</MenuItem>
                <MenuItem>100</MenuItem>
            </Select>
            <AppSelect/>
            <AppTextField />
        </div>
    )
}

export default FiltroConsulta