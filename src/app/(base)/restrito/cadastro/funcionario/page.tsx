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
import { TypeTabelaFuncionario } from '@/presentation/types'

const page = () => {
    const [openCadastro, setOpenCadastro] = useState<boolean>(false);
    const [idUsuario, setIdUsuario] = useState<string | undefined>('3372');
    const [resultPsquisa,setResultPsquisa]  = useState<TypeTabelaFuncionario[]|undefined>(); 
    const { setFlag, flags } = useFlags();
    if (flags['openCadastroFuncionario'] !== undefined &&flags['openCadastroFuncionario']===true) {
        return <CadastroPage idFuncionario={idUsuario}/>
    }
    return (
        <div>

            <AppTitle title='Funcionario' />
            <div className="content">
                <div className="filter">
                    <FiltroConsulta setDataFiltro={(data:TypeTabelaFuncionario[]|undefined)=>{
                        setResultPsquisa(data);
                    }} onOpenNovo={() => {setIdUsuario(undefined) }} />
                </div>
                <div className="result">
                    <ResultadoFiltro dados={resultPsquisa} setIdUsuario={(id) => setIdUsuario(id)} />
                </div>
            </div>
        </div>
    )
}

export default page