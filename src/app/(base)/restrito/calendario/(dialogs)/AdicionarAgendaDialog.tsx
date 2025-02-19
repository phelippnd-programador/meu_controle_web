'use client'
import { DialogPropsAgenda } from '@/presentation/components/calendario/DialogPropsAgenda'
import { DataModelCalendar } from '@/presentation/components/calendario/model/DataModelCalendar'
import AppTextField from '@/presentation/components/input/AppTextField'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form'
import { schemaCadastro, TypeSchemaCadastro } from '../model/formCadastro'
import { zodResolver } from '@hookform/resolvers/zod'
import AppTextFieldController from '@/presentation/components/input/AppTextFieldController'
import FooterButtonTabs from '@/presentation/components/footer/FooterButtonTabs'
const AdicionarAgendaDialog: React.FC<DialogPropsAgenda> = (props) => {
    const form = useForm<TypeSchemaCadastro>({
        resolver: zodResolver(schemaCadastro)
    });

    const onSubmit = (data: TypeSchemaCadastro) => {
        let dataAgenda:Date= new Date(`${props.data?.startStr}T${data.servico.hora}:00`);
        props.onConfirm({ title:data.title, date: dataAgenda });
        props.onClose();
    }

    return (
        <Dialog open={true} onClose={props.onClose}>
            <DialogTitle>{`Adicionar Agenda as ${props.data?.startStr}` }</DialogTitle>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>


                    <DialogContent>
                        <AppTextFieldController name='cliente' label='Ciente' />
                        <AppTextFieldController name='servico.tipo_servico' label='Tipo Serviço' />
                        {/* <AppTextFieldController name='servico.data' label='Data' /> */}
                        <AppTextFieldController name='servico.hora' label='Hora' />
                        <AppTextFieldController name='servico.profissional' label='Profissional' />
                        {/* <AppTextFieldController name='idProfissional' label={"Profissional"} /> */}

                        <FooterButtonTabs />
                    </DialogContent>

                </form>
            </ FormProvider>
        </Dialog>
    )
}

export default AdicionarAgendaDialog