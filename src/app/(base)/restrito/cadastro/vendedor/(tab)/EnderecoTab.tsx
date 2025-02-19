import AppSelect from '@/presentation/components/input/AppSelect'
import AppSelectFieldController from '@/presentation/components/input/AppSelectFieldController';
import AppTextField from '@/presentation/components/input/AppTextField'
import AppTextFieldController from '@/presentation/components/input/AppTextFieldController';
import { enumToOptions, TipoResidencia } from '@/presentation/types/enums';
import React from 'react'
import { useFormContext } from 'react-hook-form';

const EnderecoTab = () => {
    const { control } = useFormContext();
    return (
        <div className='flex flex-col w-full gap-5'>
            <div className='gap-6  grid lg:grid-cols-7 grid-cols-1'>
                <div className='lg:col-span-1'>
                    <AppTextFieldController name={'endereco.cep'} label={'CEP'} />
                </div>
                <div className='lg:col-span-1'>
                    <AppSelectFieldController itens={enumToOptions(TipoResidencia)} id={'tipo_residencia'} name={'endereco.tipo_residencia'} label={'Tipo de Residência'}/>
                    {/* <AppSelect id='endereco.tipo_residencia' name={'endereco.tipo_residencia'} label={'Tipo de Residência'} /> */}
                </div>
                <div className='lg:col-span-5'>
                    <AppTextFieldController name={'endereco.logradouro'} label={'Logradouro'} />
                </div>
            </div>

            <div className='gap-6 grid lg:grid-cols-4 grid-cols-1'>
                <div className='lg:col-span-1'>
                    <AppTextFieldController name={'endereco.numero'} label={'Número'} />
                </div>
                <div className='lg:col-span-2'><AppTextFieldController name={'endereco.complemento'} label={'Complemento'} /></div>
                <div className='lg:col-span-1'>
                    <AppTextFieldController name={'endereco.bairro'} label={'Bairro'} />
                </div>
            </div>
            <div className='gap-6 grid lg:grid-cols-1 grid-cols-1'>
                <AppTextFieldController name={'endereco.ponto_referencia'} label={'Ponto de Referência'} />
            </div>

            <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppTextFieldController name={'endereco.cidade'} label={'Cidade'} />
                <AppSelect id='endereco.estado' name={'endereco.estado'} label={'Estado'} />
            </div>

        </div>
    )
}

export default EnderecoTab