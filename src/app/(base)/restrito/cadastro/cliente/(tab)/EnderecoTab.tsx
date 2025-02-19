import AppSelect from '@/presentation/components/input/AppSelect'
import AppTextField from '@/presentation/components/input/AppTextField'
import AppTextFieldController from '@/presentation/components/input/AppTextFieldController'
import React from 'react'

const EnderecoTab = () => {
    return (
        <div className='flex flex-col w-full gap-5'>
            <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppTextFieldController label='CEP' name='endereco.cep' />
                <AppTextFieldController label='Tipo de Logradouro' name='endereco.tipo_logradouro' />

            </div>
            <AppTextFieldController label='Logradouro' name='endereco.logradouro' />
            <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppTextFieldController label='Numero' name='endereco.numero' />
                <AppTextFieldController label='Complemento' name='endereco.complemento' />
            </div>
            <AppTextFieldController label='Bairro' name='endereco.bairro' />
            <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppSelect id='estado' label='Estado' />
                <AppSelect id='cidade' label='Cidade' />
            </div>
        </div>
    )
}

export default EnderecoTab