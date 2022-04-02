import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { messages } from '../../helpers/calendar-messages-es'
import { CalendarActividadEvento } from './CalendarActividadEvento';
import { useDatos } from '../../hooks/useDatos'
import { ApiCalendatio } from '../../apis/alumno/alumnoApis';

moment.locale('es')

const localizer = momentLocalizer(moment)

export const CalendarioActividad = () => {

    const { state } = useDatos(ApiCalendatio)

    return (
        <div className="myCustomHeight">
            <Calendar
                localizer={localizer}
                events={state}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                components={{
                    event: CalendarActividadEvento
                }}
            />
        </div>
    )
}
