'use client'
import React, { useState } from 'react'
import FiltroConsulta from './(filtros)/FiltroConsulta'
import ResultadoFiltro from './(result)/ResultadoFiltro'
import { AppBar, Button, Divider, Tabs } from '@mui/material'
import AppTitle from '@/presentation/components/title/AppTitle'
import Tab from '@/presentation/components/tab/Tab'
import CadastroPage from './(paginas)/CadastroPage'

const page = () => {
    const [openCadastro, setOpenCadastro] = useState<boolean>(false);

    if (openCadastro) {
        return <CadastroPage setOpen={setOpenCadastro} />
    }
    return (
        <div>
            <AppTitle title='Vendedor' />
            <div className="content">
                <div className="filter">
                    <FiltroConsulta onOpenNovo={() => setOpenCadastro(true)} />
                </div>
                <div className="result">
                    <ResultadoFiltro />
                </div>
            </div>
        </div>
    )
}

export default page