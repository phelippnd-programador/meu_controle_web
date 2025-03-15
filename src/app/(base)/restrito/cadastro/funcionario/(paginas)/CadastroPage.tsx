'use client'
import ImageUpload from '@/presentation/components/imagem/ImageUpload'
import AppSelectColor from '@/presentation/components/input/AppSelectColor'
import AppTextField from '@/presentation/components/input/AppTextField'
import AppTitle from '@/presentation/components/title/AppTitle'
import { AppBar, Button, Dialog, DialogContent, Divider,  Tabs } from '@mui/material'
import React, { useEffect, useState } from 'react'
import GeralTab from '../(tab)/GeralTab'
import TabPanel from '../../produto/(tabs)/TabPanel'
import FooterButtonTabs from '@/presentation/components/footer/FooterButtonTabs'
import { FieldErrors, FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import AppTextFieldController from '@/presentation/components/input/AppTextFieldController'
import { schemaCadastro, TypeSchemaCadastro } from '../model/schemaModel'
import CargaHorariaTab from '../(tab)/CargaHorariaTab'
import { useAlert } from '@/presentation/components/provider/AlertProvider'
import {useCustomSWR} from '@/presentation/hooks/ConsultaFiltro'
import { useFlags } from '@/presentation/hooks/FlagProvider'
import Tab from '@/presentation/components/tab/Tab'
import EnderecoTab from '@/presentation/components/tab/EnderecoTab'
interface CadastroDialogProps {
  idFuncionario?: string;
}
const CadastroPage: React.FC<CadastroDialogProps> = ({  idFuncionario }) => {
  const{setFlag} = useFlags();
  const [tabIndex, setTabIndex] = useState(0);
  const { showAlert } = useAlert();
  const form = useForm<TypeSchemaCadastro>({ resolver: zodResolver(schemaCadastro) });
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  if (idFuncionario) {
    const { data, error } = useCustomSWR<TypeSchemaCadastro[]>(`http://localhost:3001/funcionario?id=${idFuncionario}`, undefined, { dedupingInterval: 600000 });
    useEffect(() => {
      if (data && data.length > 0) {
        form.reset(data[0]);
        setIsDataLoaded(true);
      }
    }, [data, form, isDataLoaded]);
  }
  

  const onSubmit = (data: TypeSchemaCadastro) => {
    console.log("Dados", JSON.stringify(data));
    fetch("http://localhost:3001/funcionario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        showAlert("Funcionário cadastrado com sucesso", "success");
      }else{
        showAlert("Erro ao cadastrar funcionário", "error");
      }
    
    })
        .catch((error) => {
          showAlert("Erro ao cadastrar funcionário", "error");
        });
    setFlag('openCadastroFuncionario',false);
    
  }
  const alertError = (error: FieldErrors) => {
    const extractMessages = (errors: FieldErrors): string[] => {
      const messages: string[] = [];

      Object.values(errors).forEach(err => {
        if (typeof err === 'object' && err !== null) {
          if ('message' in err && typeof err.message === 'string') {
            messages.push(err.message);
          } else {
            messages.push(...extractMessages(err as FieldErrors));
          }
        }
      });

      return messages;
    };
    const messages = extractMessages(error);
    if (messages.length > 0) {
      showAlert(messages[0], "error");
    }
  }
  const handleTabChange = (event: React.ChangeEvent<{}>, newIndex: number) => {
    setTabIndex(newIndex);
  };
  return (
    <div className='flex flex-col gap-5 '>
      {!isDataLoaded && idFuncionario!==undefined? <></> : <>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit,
            alertError
          )} >

            <AppTitle title='Novo Funcionario' />
            <AppBar position="static" className="bg-blue-600">
              <Tabs value={tabIndex} onChange={handleTabChange} className="text-white">
                <Tab tabIndex={tabIndex} label={`Informações Gerais`} />
                <Tab tabIndex={tabIndex} label="Informações Endereço" />
                <Tab tabIndex={tabIndex} label="Carga Horária" />
              </Tabs>
            </AppBar>

            <TabPanel value={tabIndex} index={0}>
              <GeralTab isDataLoaded={isDataLoaded || idFuncionario===undefined} />
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
              <EnderecoTab isDataLoaded={isDataLoaded || idFuncionario===undefined} />
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
              <CargaHorariaTab isDataLoaded={isDataLoaded || idFuncionario===undefined}/>
            </TabPanel>

            <FooterButtonTabs />
          </form>
        </FormProvider>
      </>}
    </div>
  )
}

export default CadastroPage