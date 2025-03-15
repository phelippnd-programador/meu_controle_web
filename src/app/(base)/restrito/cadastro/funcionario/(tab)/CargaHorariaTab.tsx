import AppAdicionaCargaHoraria from '@/presentation/components/botao_adicionar/AppAdicionaCargaHoraria'
import React from 'react'

interface CargaHorariaTabProps {
    isDataLoaded?:boolean;
}
const CargaHorariaTab:React.FC<CargaHorariaTabProps> = ({isDataLoaded}) => {
    if (!isDataLoaded) return <p>Carregando...</p>;
    return (
        <div className='flex flex-col w-full gap-5'>
            <div>
                <AppAdicionaCargaHoraria nameBase='horarios'/>
            </div>
            
        </div>
    )
}

export default CargaHorariaTab