import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  TablePagination, IconButton, Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle, Button, TextField, Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ItemModel } from './model/ItemModel';



const initialData: ItemModel[] = [
  { id: 1, name: 'Produto A', stock: 20, price: 10.00 },
  { id: 2, name: 'Produto B', stock: 15, price: 20.00 },
  { id: 3, name: 'Produto C', stock: 5, price: 30.00 },
  { id: 4, name: 'Produto D', stock: 0, price: 40.00 },
  { id: 5, name: 'Produto E', stock: 10, price: 50.00 },
  { id: 6, name: 'Produto F', stock: 25, price: 60.00 },
  { id: 7, name: 'Produto G', stock: 30, price: 70.00 },
  { id: 8, name: 'Produto H', stock: 35, price: 80.00 },
  { id: 9, name: 'Produto I', stock: 40, price: 90.00 },
  { id: 10, name: 'Produto J', stock: 45, price: 100.00 },
];

const InventoryTable: React.FC = () => {
  const [data, setData] = useState<ItemModel[]>(initialData);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [openConfirmDialog, setOpenConfirmDialog] = useState<boolean>(false);
  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ItemModel | null>(null);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteClick = (item: ItemModel) => {
    setSelectedItem(item);
    setOpenConfirmDialog(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedItem) {
      setData(data.filter((item) => item.id !== selectedItem.id));
    }
    setOpenConfirmDialog(false);
  };

  const handleEditClick = (item: ItemModel) => {
    setSelectedItem({ ...item }); // Garante que todos os campos estão presentes
    setOpenEditDialog(true);
  };

  const handleEditChange = (field: keyof ItemModel, value: string | number) => {
    if (selectedItem) {
      setSelectedItem({ ...selectedItem, [field]: value });
    }
  };

  const handleEditSave = () => {
    if (selectedItem) {
      setData(data.map((item) => (item.id === selectedItem.id ? selectedItem : item)));
    }
    setOpenEditDialog(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Produto</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Preço Unitário</TableCell>
            <TableCell align="right">Valor Total</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.stock}</TableCell>
              <TableCell align="right">{`R$ ${row.price.toFixed(2)}`}</TableCell>
              <TableCell align="right">{`R$ ${(row.stock * row.price).toFixed(2)}`}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="edit" onClick={() => handleEditClick(row)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => handleDeleteClick(row)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {/* Diálogo de Confirmação de Exclusão */}
      <Dialog open={openConfirmDialog} onClose={() => setOpenConfirmDialog(false)}>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Você tem certeza de que deseja excluir "{selectedItem?.name}" do inventário?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenConfirmDialog(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDeleteConfirm} color="secondary">
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
      {/* Diálogo de Edição */}
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Editar Produto</DialogTitle>
        <DialogContent>
          <Box component="form">
            <TextField
              margin="normal"
              label="Produto"
              fullWidth
              value={selectedItem?.name || ''}
              onChange={(e) => handleEditChange('name', e.target.value)}
            />
            <TextField
              margin="normal"
              label="Quantidade"
              type="number"
              fullWidth
              value={selectedItem?.stock || ''}
              onChange={(e) => handleEditChange('stock', parseInt(e.target.value, 10))}
            />
            <TextField
              margin="normal"
              label="Preço Unitário"
              type="number"
              fullWidth
              value={selectedItem?.price || ''}
              onChange={(e) => handleEditChange('price', parseFloat(e.target.value))}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleEditSave} color="secondary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default InventoryTable;
