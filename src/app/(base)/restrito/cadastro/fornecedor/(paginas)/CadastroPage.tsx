'use client'
import ImageUpload from '@/presentation/components/imagem/ImageUpload'
import AppSelectColor from '@/presentation/components/input/AppSelectColor'
import AppTextField from '@/presentation/components/input/AppTextField'
import AppTitle from '@/presentation/components/title/AppTitle'
import { AppBar, Button, Dialog, DialogContent, Divider, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import { ChromePicker, ColorResult } from 'react-color'
import EnderecoTab from '../(tab)/EnderecoTab'
import GeralTab from '../(tab)/GeralTab'
import FiscalTab from '../(tab)/FiscalTab'
import TabPanel from '../../produto/(tabs)/TabPanel'
import FooterButtonTabs from '@/presentation/components/footer/FooterButtonTabs'
interface CadastroDialogProps {
  setOpen: (value: boolean) => void
}
const CadastroPage: React.FC<CadastroDialogProps> = ({ setOpen }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    console.log("INdex nov", newIndex);
    setTabIndex(newIndex);
  };
  return (
    <div className='flex flex-col gap-5 '>
      <AppTitle title='Novo Fornecedore' />
      <AppBar position="static" className="bg-blue-600">
        <Tabs value={tabIndex} onChange={handleTabChange} className="text-white">
          <Tab tabIndex={tabIndex} label={`Informações Gerais`} />
          <Tab tabIndex={tabIndex} label="Informações Endereço" />
          <Tab tabIndex={tabIndex} label="Informações Fiscais" />
        </Tabs>
      </AppBar>

      <TabPanel value={tabIndex} index={0}>
        <GeralTab />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <EnderecoTab />
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <FiscalTab />
      </TabPanel>
      <FooterButtonTabs />
    </div>
  )
}

export default CadastroPage