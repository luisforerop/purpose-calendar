import moment from 'moment'
import type { Event, EventPropGetter, View } from 'react-big-calendar'
import { Calendar, momentLocalizer } from 'react-big-calendar'

import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'

import { calendarMessages } from '../../shared/constants'
import { CustomEvent } from '../../shared/models'
import { CalendarEvent } from '../../components/CalendarEvent'
import { Fragment, useEffect, useState } from 'react'
import { CalendarActions } from '../../components/CalendarActions/index'

moment.locale('es')
const localizer = momentLocalizer(moment)

const eventStyleGetter: EventPropGetter<Event> = (params) => ({
  style: {
    backgroundColor: '#367CF7',
    borderRadius: '0px',
    opacity: 0.8,
    display: 'block',
    color: '#FFF',
  },
})

export const CalendarScreen = () => {
  const [lastView, setLastView] = useState<View>(
    (localStorage.getItem('lastView') as View) ?? 'month'
  )
  const onDoubleClick = (e: CustomEvent) => {}

  const onSelect = (e: CustomEvent) => {}

  const onViewChange = (view: View) => {
    setLastView(view)
  }

  useEffect(() => {
    localStorage.setItem('lastView', lastView)
  }, [lastView])

  const myEventsList: CustomEvent[] = [
    {
      title: 'Crear mi primer proyecto',
      start: moment().toDate(),
      end: moment().add(2, 'hour').toDate(),
      user: {
        name: 'Luis',
      },
    },
  ]

  return (
    <Fragment>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={calendarMessages}
        view={lastView}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onView={onViewChange}
        onSelectEvent={onSelect}
      />
      <CalendarActions />
    </Fragment>
  )
}
