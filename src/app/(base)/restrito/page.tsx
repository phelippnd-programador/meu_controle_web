'use client'
import React from 'react';
import SalesChart from '@/presentation/components/dashboard/SalesChart';
import ExpensesChart from '@/presentation/components/dashboard/ExpensesChart';
import TopProductsChart from '@/presentation/components/dashboard/TopProductsChart';
import InventoryTable from '@/presentation/components/dashboard/InventoryTable';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import Card from '@/presentation/components/card/Card';

const DashboardPage: React.FC = () => {
  return (
    <Container className="lg flex flex-col gap-4">
      <div className="root flex gap-4 w-full">
        <div className="vendas_periodo w-full h-96 bg-white">
          <p>OI</p>
        </div>
        <div className="tipos_venda flex flex-col gap-4 w-full">
          <div className="flex cards gap-4">
            <Card/>
            <Card/>
          </div>
          <div className="grafico h-72 bg-white">
            <p>Grafico</p>
          </div>
        </div>
      </div>
      <div className="cards flex gap-x-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="links_relatorio flex gap-x-4 w-full">
        <div className="card_lin p-4 shadow-md rounded-sm w-full">
          <p className='text-sm'>Produtos mais vendido</p>
        </div>
        <div className="card_lin p-4 shadow-md rounded-sm w-full">
          <p className='text-sm'>Top Clientes</p>
        </div>

      </div>
      <div className="contas flex gap-x-4">
        <Card />
        <Card />
      </div>
    </Container>
  );
};

export default DashboardPage;
