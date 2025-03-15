'use client'
import { Button, IconButton, Skeleton } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react'
import { Control, FieldValues, useFieldArray, useFormContext } from 'react-hook-form';
import AppSelect from '../input/AppSelect';
import AppTextField from '../input/AppTextField';
import DeleteIcon from '@mui/icons-material/Delete';
import AppTextFieldController from '../input/AppTextFieldController';
import { Add } from '@mui/icons-material';
import AppSelectFieldController from '../input/AppSelectFieldController';
import { enumToOptions, TipoTelefone } from '@/presentation/types/enums';
import AppAdiciona from './AppAdiciona';
import { useCustomSWR } from '@/presentation/hooks/ConsultaFiltro';
import { ItemSelect } from '../input/model/ItemSelect';
import { TypeBancoConveniado } from '@/presentation/types';
interface AppAdicionaDadosBancariosProps {
    nameBase: string;
}
const bancosFetcher = (url: string) => fetch(url).then((res) => res.json().then((data) => data.value));
const AppAdicionaDadosBancarios: React.FC<AppAdicionaDadosBancariosProps> = (props) => {
    const { watch } = useFormContext();

    const { data, error } = useCustomSWR<ItemSelect[]>('http://localhost:3001/tipo-conta-bancaria');
    const { data: dataBanco, error: errorBanco } = useCustomSWR<TypeBancoConveniado[]>(`https://olinda.bcb.gov.br/olinda/servico/CCR/versao/v1/odata/InstituicoesFinanceirasAutorizadas?$top=1000&$filter=Pais%20eq%20'Brasil'&$orderby=Nome&$format=json&$select=CodigoSicap,Nome,Pais`, bancosFetcher);

    if (error || errorBanco) return <p>Erro ao carregar opções</p>;
    const bancosMapeados: ItemSelect[] = dataBanco?.map((banco: TypeBancoConveniado) => ({
        label: banco.Nome,
        value: banco.CodigoSicap,
        id: banco.CodigoSicap
    })) || [];
   

    return (
        <AppAdiciona isloaded={!data || !dataBanco} required={false} title='Adicionar Dados Bancários' nameBase={props.nameBase} component={
            (index) => {
                const tipoContaSelecionado = watch(`${props.nameBase}.${index}.tipo`);
                // clear(tipoContaSelecionado, index); 
                return <>
                    <div className="lg:col-span-2">
                        <AppSelectFieldController itens={data} id={`tipo_conta_bancaria_${index}`} name={`${props.nameBase}.${index}.tipo`} label={'Tipo Conta '} />
                    </div>
                    {tipoContaSelecionado === '3' && <>
                        <div className="lg:col-span-9 ">
                            <AppTextFieldController name={`${props.nameBase}.${index}.chave`} label={'Chave'} />
                        </div>
                    </>}
                    {tipoContaSelecionado !== '3' &&
                        <>
                            <div className="lg:col-span-4 ">
                                <AppSelectFieldController itens={bancosMapeados}
                                    id={`banco_${index}`}
                                    name={`${props.nameBase}.${index}.banco`}
                                    label={'Banco'} />
                            </div>
                            <div className="lg:col-span-2">
                                <AppTextFieldController name={`${props.nameBase}.${index}.agencia`} label={'Agencia'} />
                                {/* <AppTextField label={"Telefone"} /> */}
                            </div>
                            <div className="lg:col-span-3">
                                <AppTextFieldController name={`${props.nameBase}.${index}.conta`} label={'Conta'} />
                                {/* <AppTextField label={"Telefone"} /> */}
                            </div>
                        </>
                    }
                </>
            }
        } />
    )
}


export default AppAdicionaDadosBancarios