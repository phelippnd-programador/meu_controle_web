import { Divider } from '@mui/material';
import App from 'next/app';
import React from 'react'
interface AppTitleProps {
    title: string;
}
const AppTitle: React.FC<AppTitleProps> = ({ title }) => {

    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-bold' >
                {title}
            </h1>
            <Divider />
            <Divider />
        </div>
    )
}

export default AppTitle