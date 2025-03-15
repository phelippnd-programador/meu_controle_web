import { TableContainer, Paper, Table, Button, TablePagination, TableHead, TableBody, TableCell } from '@mui/material';
import React from 'react'
interface TableDefaultProps {
    setOpenCadastro: (open: boolean) => void;
    setIdUsuario: (id: string) => void;
    dados: DataTable[];
    headers: string | string[];
}
type DataTable = {
    id: string;
    value: string | string[];

}
const TableDefault: React.FC<TableDefaultProps> = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>

                </TableHead>
                <TableBody>
                    {props.dados && props.dados.map((row, index) => (<>
                        
                        <TableCell >{row.value}</TableCell>
                    </>))

                    }
                </TableBody>
                <Button onClick={() => {
                    props.setIdUsuario("3372");
                    props.setOpenCadastro(true);
                }} >3372</Button>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={10}
                rowsPerPage={10}
                page={0}
                onPageChange={() => { }}
                onRowsPerPageChange={() => { }}
            />
        </TableContainer>
    )
}

export default TableDefault