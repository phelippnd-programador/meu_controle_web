import AppSelect from '@/presentation/components/input/AppSelect'
import AppSelectFieldController from '@/presentation/components/input/AppSelectFieldController';
import AppTextField from '@/presentation/components/input/AppTextField'
import AppTextFieldController from '@/presentation/components/input/AppTextFieldController';
import { ItemSelect } from '@/presentation/components/input/model/ItemSelect';
import useCustomSWR from '@/presentation/hooks/ConsultaFiltro';
import { enumToOptions, TipoResidencia } from '@/presentation/types/enums';
import React from 'react'
import { useFormContext } from 'react-hook-form';
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const fetcherMunicipio = async (url: string): Promise<ItemSelect[]> => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Erro ao buscar os dados");
    }

    const data = await res.json();
    return data.length > 0 ? data[0].value : []; // Retorna apenas os municípios
};

const EnderecoTab = () => {
    const { watch } = useFormContext();
    const estadoSelecionado = watch("endereco.estado");
    console.log("Estado selecionado", estadoSelecionado)
    const { data: dataTipoResidencia, error } = useCustomSWR<ItemSelect[]>('http://localhost:3001/tipo-residencia',undefined,{dedupingInterval: 600000});
    const { data: dataTipoEstado, error: errorTipoEstado } = useCustomSWR<ItemSelect[]>('http://localhost:3001/tipo-estado',undefined,{dedupingInterval: 600000});
    const { data: dataTipoMunicipio, error: errorTipoMunicipio } = 
        useCustomSWR<ItemSelect[]>(estadoSelecionado ? `http://localhost:3001/tipo-municipio?estado=${estadoSelecionado}` : null, fetcherMunicipio);
    
    // useSWR<ItemSelect[]>(estadoSelecionado ? `http://localhost:3001/tipo-municipio?estado=${estadoSelecionado}` : null, fetcherMunicipio,
    //     {
    //         revalidateOnMount: false, // Não realiza a requisição na montagem do componente
    //         dedupingInterval: 60000, // Intervalo de deduplicação em milissegundos (1 minuto)
    //         revalidateOnFocus: false, // Desativa a revalidação ao focar na janela
    //         revalidateOnReconnect: false // Desativa a revalidação ao reconectar a rede
    //     }
    // );

    if (error || errorTipoEstado) return <p>Erro ao carregar opções</p>;
    if (!dataTipoResidencia || !dataTipoEstado) return <p>Carregando...</p>;
    return (
        <div className='flex flex-col w-full gap-5'>
            <div className='gap-6  grid lg:grid-cols-7 grid-cols-1'>
                <div className='lg:col-span-1'>
                    <AppTextFieldController name={'endereco.cep'} label={'CEP'} />
                </div>
                <div className='lg:col-span-1'>
                    <AppSelectFieldController itens={dataTipoResidencia} id={'tipo_residencia'} name={'endereco.tipo_residencia'} label={'Tipo de Residência'} />
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
                {/* <AppTextFieldController name={'endereco.cidade'} label={'Cidade'} /> */}
                {estadoSelecionado &&
                    <AppSelectFieldController itens={dataTipoMunicipio} id='endereco.cidade' name={'endereco.cidade'} label={'Municipio'} />
                }
                <AppSelectFieldController itens={dataTipoEstado} id='endereco.estado' name={'endereco.estado'} label={'Estado'} />
            </div>

        </div>
    )
}

export default EnderecoTab