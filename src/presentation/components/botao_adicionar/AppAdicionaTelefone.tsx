import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react'
import { Control, FieldValues, useFieldArray, useFormContext } from 'react-hook-form';
import AppSelect from '../input/AppSelect';
import AppTextField from '../input/AppTextField';
import DeleteIcon from '@mui/icons-material/Delete';
import AppTextFieldController from '../input/AppTextFieldController';
import { Add } from '@mui/icons-material';
import AppSelectFieldController from '../input/AppSelectFieldController';
import { enumToOptions, TipoTelefone } from '@/presentation/types/enums';
import AppAdiciona from './AppAdiciona';
import {useCustomSWR} from '@/presentation/hooks/ConsultaFiltro';
import { ItemSelect } from '../input/model/ItemSelect';
interface AppAdicionaTelefoneProps {
    nameBase: string;
}
const AppAdicionaTelefone: React.FC<AppAdicionaTelefoneProps> = (props) => {
    const { data, error } = useCustomSWR<ItemSelect[]>('http://localhost:3001/tipo-telefone');
    if (error) return <p>Erro ao carregar opções</p>;
    return (
            <AppAdiciona isloaded={!data} required={true} title='Adicionar Telefone' nameBase={props.nameBase} component={
                (index) => {
                    return <>
                        <div className="lg:col-span-3">
                            <AppSelectFieldController itens={data} id={`tipo_telefone_${index}`} name={`${props.nameBase}.${index}.tipo`} label={'Tipo Telefone'} />
                        </div>
                        <div className="lg:col-span-2">
                            <AppTextFieldController name={`${props.nameBase}.${index}.ddd`} label={'ddd'} />
                            {/* <AppTextField label={"ddd"} /> */}
                        </div>
                        <div className="lg:col-span-6">
                            <AppTextFieldController name={`${props.nameBase}.${index}.numero`} label={'Telefone'} />
                            {/* <AppTextField label={"Telefone"} /> */}
                        </div>
                    </>
                }
            } />
    )
}

export default AppAdicionaTelefone