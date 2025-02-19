'use client'
import React, { useState } from 'react'
import ResultadoFiltro from './(result)/ResultadoFiltro'
import { AppBar, Button, Divider, Tabs } from '@mui/material'
import CadastroPage from './(paginas)/CadastroPage'
import AppTitle from '@/presentation/components/title/AppTitle'
import Tab from '@/presentation/components/tab/Tab'
import { Controller, ControllerFieldState, ControllerRenderProps, FieldValues, UseFormStateReturn } from 'react-hook-form'
import Filtro from '@/presentation/components/filtro/Filtro'
import FiltroCliente from './(filtros)/FiltroCliente'
import { ActiveProvider } from '@/presentation/components/provider/ActiveProvider'

const page = () => {
    const [openCadastro, setOpenCadastro] = useState<boolean>(false);
    if (openCadastro) {
        return <CadastroPage setOpen={setOpenCadastro} />
    }
    return (
        <div>

            <AppTitle title='Clientes' />
            <div className="content">
                <div className="filter">
                    <FiltroCliente onOpenNovo={() => setOpenCadastro(true)} />                
                </div>
                <div className="result">
                    <ResultadoFiltro />
                </div>
            </div>
        </div>
    )
}

export default page