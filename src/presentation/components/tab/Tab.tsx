'use client';
import React from 'react';
import { Tab as TabMui, TabProps as TabMuiProps } from '@mui/material';

interface TabProps extends TabMuiProps {
 // Índice do Tab
  label: string; // Rótulo da aba
}

const Tab: React.FC<TabProps> = ({ value,tabIndex, label, ...props }) => {
  return (
    <TabMui
      {...props} // Repasse todas as propriedades para o TabMui (inclui onClick e value)
      value={value} // Valor necessário para o controle pelo Tabs
      className={`${
        tabIndex==value? 'text-gray-700 border-white' : 'text-gray-300 border-transparent'
      } text-lg font-semibold hover:text-white border-b-2 hover:border-white transition-all duration-300`}
      label={label}

    //   disableRipple // Remove o efeito padrão do MUI
    />
  );
};

export default Tab;
