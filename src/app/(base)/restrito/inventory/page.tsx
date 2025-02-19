
'use client'
import React from 'react';
import InventoryTable from '@/presentation/components/inventory/InventoryTable';
import { Container, Box, Typography } from '@mui/material';

const InventoryPage: React.FC = () => {
  return (
      <Container maxWidth="lg">
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Inventário
          </Typography>
          <InventoryTable />
        </Box>
      </Container>
  );
};

export default InventoryPage;
