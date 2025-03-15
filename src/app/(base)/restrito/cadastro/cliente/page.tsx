'use client'
import React, { useState } from 'react'
import FiltroConsulta from './(filtros)/FiltroConsulta'
import ResultadoFiltro from './(result)/ResultadoFiltro'
import { AppBar, Button, Divider, Tabs } from '@mui/material'
import AppTitle from '@/presentation/components/title/AppTitle'
import Tab from '@/presentation/components/tab/Tab'
import CadastroPage from './(paginas)/CadastroPage'
import { TypeSchemaCadastro } from './model/schemaModel'
import { FlagProvider, useFlags } from '@/presentation/hooks/FlagProvider'
import { TypeTabelaFornecedor, TypeTabelaFuncionario } from '@/presentation/types'

const page = () => {
    const [idFornecedor, setIdFornecedor] = useState<string | undefined>('3372');
    const [resultPsquisa,setResultPsquisa]  = useState<TypeTabelaFornecedor[]|undefined>(); 
    const { flags } = useFlags();
    if (flags['openCadastroCliente'] !== undefined &&flags['openCadastroCliente']===true) {
        return <CadastroPage idFuncionario={idFornecedor}/>
    }
    return (
        <div>

            <AppTitle title='Cliente' />
            <div className="content">
                <div className="filter">
                    <FiltroConsulta setDataFiltro={(data:TypeTabelaFornecedor[]|undefined)=>{
                        setResultPsquisa(data);
                    }} onOpenNovo={() => {setIdFornecedor(undefined) }} />
                </div>
                <div className="result">
                    <ResultadoFiltro dados={resultPsquisa} setId={(id) => setIdFornecedor(id)} />
                </div>
            </div>
        </div>
    )
}

export default page