import React from 'react'
import AppSelect from '../input/AppSelect'

const InputItem = () => {
    return (
        <div className='lg:col-span-4'>
            <AppSelect id='tipo_dele' label={"Dia da Semana"} />
        </div>
    )
}

export default InputItem