'use client'
import React, { useState } from 'react';
import { AppBar, Tabs,Tab as TabMui,  Box, Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import AdditionalInfoTab from '../(tabs)/AdditionalInfoTab';
import BasicInfoTab from '../(tabs)/BasicInfoTab';
import FiscalInfoTab from '../(tabs)/FiscalInfoTab';
import InvoiceInfoTab from '../(tabs)/InvoiceInfoTab';
import PriceQuantityTab from '../(tabs)/PriceQuantityTab';
import TabPanel from '../(tabs)/TabPanel';
import Tab  from '@/presentation/components/tab/Tab';


// Definindo o esquema de validação com Zod
const schema = z.object({
    productName: z.string().min(1, 'Nome do Produto é obrigatório'),
    productCode: z.string().min(1, 'Código do Produto é obrigatório'),
    description: z.string().min(1, 'Descrição é obrigatória'),
    category: z.string().min(1, 'Categoria é obrigatória'),
    ncm: z.string().min(1, 'NCM é obrigatório'),
    cfop: z.string().min(1, 'CFOP é obrigatório'),
    cst: z.string().min(1, 'CST é obrigatório'),
    productOrigin: z.string().min(1, 'Origem do Produto é obrigatória'),
    salePrice: z.number().positive('Preço de Venda deve ser positivo'),
    costPrice: z.number().positive('Preço de Custo deve ser positivo'),
    stockQuantity: z.number().int().positive('Quantidade em Estoque deve ser positiva'),
    unit: z.string().min(1, 'Unidade de Medida é obrigatória'),
    grossWeight: z.number().positive('Peso Bruto deve ser positivo'),
    netWeight: z.number().positive('Peso Líquido deve ser positivo'),
    dimensions: z.object({
        height: z.number().positive('Altura deve ser positiva'),
        width: z.number().positive('Largura deve ser positiva'),
        depth: z.number().positive('Profundidade deve ser positiva')
    }),
    barcode: z.string().min(1, 'Código de Barras é obrigatório'),
    manufacturerCNPJ: z.string().min(14, 'CNPJ do Fabricante é obrigatório'),
    manufactureDate: z.date().refine(date => date <= new Date(), 'Data de Fabricação deve ser no passado'),
    expirationDate: z.date().optional(),
});

const ProductFormTabs = () => {
    const methods = useForm({
        resolver: zodResolver(schema),
    });

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
        console.log("INdex nov",newIndex);
        setTabIndex(newIndex);
    };

    const onSubmit = (data: any) => {
        console.log(data);
        // Aqui você pode integrar a lógica para emitir NFe com os dados do produto
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <AppBar position="static" className="bg-blue-600">
                    <Tabs value={tabIndex} onChange={handleTabChange} className="text-white">   
                        <Tab  tabIndex={tabIndex}  label={`Informações Básicas`} />
                        <Tab   tabIndex={tabIndex}   label="Informações Fiscais" />
                        <Tab  tabIndex={tabIndex}  label="Preço e Quantidade" />
                        <Tab  tabIndex={tabIndex}  label="Informações Adicionais" />
                        <Tab  tabIndex={tabIndex}  label="Informações para Nota Fiscal" />
                    </Tabs>
                </AppBar>
                <TabPanel value={tabIndex} index={0}>
                    <BasicInfoTab />
                </TabPanel>
                <TabPanel value={tabIndex} index={1}>
                    <FiscalInfoTab />
                </TabPanel>
                <TabPanel value={tabIndex} index={2}>
                    <PriceQuantityTab />
                </TabPanel>
                <TabPanel value={tabIndex} index={3}>
                    <AdditionalInfoTab />
                </TabPanel>
                <TabPanel value={tabIndex} index={4}>
                    <InvoiceInfoTab />
                </TabPanel>
                <div className='flex justify-end gap-4'>
                    <Button  onClick={methods.reset} variant="contained" color="error">
                       Limpar
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Salvar Produto
                    </Button>
                </div>
                
            </form>
        </FormProvider>
    );
};

export default ProductFormTabs;
