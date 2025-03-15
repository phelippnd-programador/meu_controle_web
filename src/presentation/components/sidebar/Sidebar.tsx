'use client'
import React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import { Home, Settings } from '@mui/icons-material'; // Importando ícones do MUI
import ItemMenu from './ItemMenu';
import Image from 'next/image';
import Sessao from './Sessao';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div className={`flex flex-col overflow-x-hidden min-h-screen h-full bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-14'} transition-width duration-700 `}>
      <div className={` ${isOpen ? 'h-40' : 'h-0  '} overflow-hidden w-full flex justify-center items-center  transition-all duration-700 `} >
        <Image className='rounded-full' width={128}
          height={128} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuoNhLLrMbvLAnq171uZy1g8scWm67SoTP8Q&s'} alt={''} />
      </div>
      <List>
        <Sessao visible={isOpen} title='Sistema'>
          <ItemMenu tooltip='PDV' icon='PointOfSale' href='/restrito' title='PDV' />
        </Sessao>
        <Sessao  visible={isOpen} title='Cadastros'>
          <ItemMenu tooltip='Cadastro de Cliente' icon='PersonAdd' href='/restrito/cadastro/cliente' title='Cliente' />
          <ItemMenu tooltip='Cadastro de Fornecedor' icon='Business' href='/restrito/cadastro/fornecedor' title='Fornecedor' />
          <ItemMenu tooltip='Cadastro de Funcionario' icon='Person' href='/restrito/cadastro/funcionario' title='Funcionário' />
        </Sessao>
        <Sessao  visible={isOpen} title='Produtos'>
        <ItemMenu tooltip='Cadastro de Categoria' icon='Category' href='/restrito/cadastro/categoria' title='Categoria' />
        <ItemMenu tooltip='Cadastro de Produto' icon='ShoppingCart' href='/restrito/cadastro/produto' title='Produto' />
        </Sessao>

        <ItemMenu icon='Home' href='/restrito' title='Assinatura' />
        <ItemMenu tooltip='Inventario' icon='Inventory' href='/restrito/inventory' title='Inventário' />
        <ItemMenu icon='ShoppingBasket' href='/restrito/produto' title='Produto' />
        <Divider className='bg-white' />
        <ItemMenu tooltip='Agenda' icon='CalendarToday' href='/restrito/calendario' title='Agenda' />
      </List>
    </div>
  );
};

export default Sidebar;
