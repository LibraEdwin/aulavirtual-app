import React from 'react'

export const CalendarActividadEvento = (event: any) => {

    const { title } = event
    return (
        <div>
            <samp>{title}</samp>
        </div>
    )
}
