import { DateSelectArg } from "@fullcalendar/core/index.js";
import { DataModelCalendar } from "./model/DataModelCalendar";

export interface DialogPropsAgenda {
    open?: boolean;
    onClose: () => void;
    onConfirm: (data:DataModelCalendar) => void;
    data?:DateSelectArg;
    title?: string;
}