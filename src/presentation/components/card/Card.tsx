import React from 'react'

const Card = () => {
    return (
        <div className="card shadow-md 
    bg-gradient-to-bl from-blue-950
    to-blue-500 
    flex w-full 
    rounded-md 
    p-3  ">
            <div className='flex flex-col w-full gap-y-2'>
                <p className='text-sm'>Conta a pagar</p>
                <p className='text-2xl font-bold'>R$ 0,00</p>
            </div>
            <div className='icon items-end justify-end'>
                <p>ICON</p>
            </div>
        </div>
    )
}

export default Card