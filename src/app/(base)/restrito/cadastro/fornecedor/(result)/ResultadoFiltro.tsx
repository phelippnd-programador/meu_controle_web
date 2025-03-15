'use client'
import { useFlags } from '@/presentation/hooks/FlagProvider';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import React, { useState } from 'react'
interface ResultadoFiltroProps {
    setId: (id: string) => void;
    dados: any[] | undefined;
}
const ResultadoFiltro: React.FC<ResultadoFiltroProps> = (props) => {
    const [page, setPage] = useState(0); // Página atual
    const [rowsPerPage, setRowsPerPage] = useState(5); // Linhas por página
    const{setFlag}=useFlags();
    // Paginação: recorta os dados conforme a página e quantidade selecionada
    const dadosPaginados = props.dados?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NOME</TableCell>
              <TableCell>FUNÇÃO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dadosPaginados?.map((row) => (
              <TableRow
                className="hover:cursor-pointer"
                key={row.id}
                onClick={() => {
                  props.setId(row.id);
                  setFlag('openCadastroFuncionario', true);
                }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.nome}</TableCell>
                <TableCell>{row.funcao}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]} // Opções de linhas por página
          component="div"
          count={props.dados? props.dados.length:0} // Total de linhas disponíveis
          rowsPerPage={rowsPerPage} // Linhas por página atual
          page={page} // Página atual
          onPageChange={(event, newPage) => setPage(newPage)} // Atualiza página
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0); // Reseta para a primeira página
          }}
        />
      </TableContainer>
    );
}

export default ResultadoFiltro