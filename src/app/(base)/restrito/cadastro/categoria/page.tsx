'use client'
import React, { useState } from 'react'
import FiltroConsulta from './(filtros)/FiltroConsulta'
import ResultadoFiltro from './(result)/ResultadoFiltro'
import { Button, Divider } from '@mui/material'
import CadastroPage from './(paginas)/CadastroPage'
import AppTitle from '@/presentation/components/title/AppTitle'

const page = () => {
    const [openCadastro, setOpenCadastro] = useState<boolean>(false);

    if (openCadastro) {
        return <CadastroPage setOpen={setOpenCadastro} />
    }
    return (
        <div>

            <AppTitle title='Categoria' />


            <div className="flex p-4 justify-end w-full">
                <Button onClick={() => setOpenCadastro(true)}>Adicionar</Button>
            </div>
            <div className="content">
                <div className="filter">
                    <FiltroConsulta />
                </div>
                <div className="result">
                    <ResultadoFiltro />
                </div>
            </div>
        </div>
    )
}

export default page