import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { messages } from '../../helpers/calendar-messages-es'
import { CalendarActividadEvento } from './CalendarActividadEvento';
import { useDatos } from '../../hooks/useDatos'
import { ApiGetCalendatio } from '../../apis/AlumnoApis'

moment.locale('es')

const localizer = momentLocalizer(moment)

export const CalendarioActividad = () => {

    const { state } = useDatos(ApiGetCalendatio)

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
