import AppAdicionaEspecialidade from '@/presentation/components/botao_adicionar/AppAdicionaEspecialidade'
import AppDateFieldController from '@/presentation/components/input/AppDateFieldController'
import AppTextFieldController from '@/presentation/components/input/AppTextFieldController'
import AppAdicionaTelefone from '@/presentation/components/botao_adicionar/AppAdicionaTelefone'
import React from 'react'
interface GeralTabProps {
    isDataLoaded ?: boolean;  
}
const GeralTab:React.FC<GeralTabProps> = ({isDataLoaded}) => {
   
    if (!isDataLoaded) return <p>Carregando...</p>;
    return (
        <div className='flex flex-col w-full gap-5'>

            <div className='gap-10 grid lg:grid-cols-2 grid-cols-1'>
                <AppTextFieldController name={'pessoais.nome'} label={'Nome'} />
                <AppDateFieldController name={'pessoais.data_nascimento'} label={'Data Nascimento'} />
                <AppTextFieldController name={'contato.email'} label={'email'} />

            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2'>

                <div>
                    <AppAdicionaEspecialidade nameBase={'especialidades'} />
                </div>
                <div className='p-0'>
                    <AppAdicionaTelefone nameBase='contato.telefone' />
                </div>
            </div>
        </div>
    )
}

export default GeralTab