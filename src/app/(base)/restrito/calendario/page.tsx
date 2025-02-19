'use client'
import React, { useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput } from "@fullcalendar/core";
import AppTitle from '@/presentation/components/title/AppTitle'
import AppAgendamento from '@/presentation/components/calendario/AppAgendamento';
import { FormProvider, useForm } from 'react-hook-form';
import AdicionarAgendaDialog from './(dialogs)/AdicionarAgendaDialog';
const AgendaPage = () => {
    const form =useForm();
    
    return (
        <FormProvider {...form}>
            <AppTitle title='Agendamentos' />
            {/* <AdicionarAgendaDialog /> */}
            <AppAgendamento addDialog={AdicionarAgendaDialog}/>
        </FormProvider>
    )
}

export default AgendaPage