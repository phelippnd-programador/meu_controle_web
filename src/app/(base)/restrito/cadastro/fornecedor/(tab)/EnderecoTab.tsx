import AppSelect from '@/presentation/components/input/AppSelect'
import AppTextField from '@/presentation/components/input/AppTextField'
import React from 'react'

const EnderecoTab = () => {
    return (
        <div className='flex flex-col w-full gap-5'>
            <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppTextField />
                <AppTextField />

            </div>
            <AppTextField />
            <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppTextField />
                <AppTextField />

            </div>
            <AppTextField />
            <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppSelect />
                <AppSelect />
            </div>
        </div>
    )
}

export default EnderecoTab