'use client'
import { Paper, Table, TableContainer, TablePagination } from '@mui/material'
import React from 'react'

const ResultadoFiltro = () => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table></Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={10}
                    rowsPerPage={10}
                    page={0}
                    onPageChange={()=>{}}
                    onRowsPerPageChange={()=>{}}
                />
            </TableContainer>
        </div>
    )
}

export default ResultadoFiltro