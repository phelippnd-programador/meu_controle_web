'use client'
import { DateSelectArg, EventInput } from '@fullcalendar/core/index.js';
import React, { ElementType, useCallback, useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { set } from 'zod';
import { DataModelCalendar } from './model/DataModelCalendar';
import { DialogPropsAgenda } from './DialogPropsAgenda';
interface AppAgendamentoProps {
    addDialog: ElementType<DialogPropsAgenda>;
}
const AppAgendamento: React.FC<AppAgendamentoProps> = (props) => {
    const [events, setEvents] = useState<EventInput[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [selected,setSelected] =useState<DateSelectArg>();
    const carregaEventos = useCallback(() => {
        setEvents([{
            id: "1",
            title: "Evento Exemplo",
            start: new Date().toISOString(),
        }]);
    }, []);
    const onConfirm = useCallback((data:DataModelCalendar) => {
        let id:string = String(events.length + 1);
            setEvents([...events, { id: String(events.length + 1), title:data.title, start: data?.date?.toISOString() }]);
    },[events]);
    const handleDateSelect = (selectInfo: DateSelectArg) => {
        setOpen(true);
        setSelected(selectInfo);
        // let title = prompt("Digite o título do evento:");
        // if (title) {
        //     const startDate: Date = new Date(selectInfo.startStr + "T00:00:00");
        //     startDate.setHours(10, 30, 10);
        //     setEvents([...events, { id: String(events.length + 1), title, start: startDate.toISOString() }]);
        // }
    };

    const handleEventClick = (clickInfo: any) => {
        if (confirm(`Deseja remover o evento '${clickInfo.event.title}'?`)) {
            setEvents(events.filter(event => event.id !== clickInfo.event.id));
        }
    };

    const handleEventDrop = (dropInfo: any) => {


        
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Zera a hora para comparar apenas a data
    
        const newDate = new Date(dropInfo.event.start);
        newDate.setHours(0, 0, 0, 0);
       
        if (newDate < today) {
            confirm(`Deseja alterar a data do eventoo evento ?`);
            alert("Não é possível mover eventos para dias anteriores a hoje.");
            dropInfo.revert(); // Reverte o evento para a posição original
        }
        else  if (confirm(`Deseja alterar a data do eventoo evento ?`)){
            setEvents(events.map(event => event.id === dropInfo.event.id ? { ...event, start: dropInfo.event.startStr } : event));
        }
        else{
            dropInfo.revert();
        }
    };
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                events={events}
                select={handleDateSelect}
                eventClick={handleEventClick}
                eventDrop={handleEventDrop}
                slotLabelFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
                eventTimeFormat={{ hour: '2-digit', minute: '2-digit', hour12: false }}
                
                selectAllow={(selectInfo) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0); // Remove a parte da hora para comparar apenas a data
            
                    const selectedDate = new Date(selectInfo.start);
                    selectedDate.setHours(0, 0, 0, 0);
            
                    return selectedDate >= today; // Permite apenas datas futuras ou hoje
                }}
            />
            {open && props.addDialog && (
                < props.addDialog data={selected} onClose={()=>setOpen(false)} onConfirm={onConfirm} />
            )}
        </>
    )
}

export default AppAgendamento