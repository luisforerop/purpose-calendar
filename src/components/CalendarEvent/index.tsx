import { FC } from 'react'
import { CustomEvent } from '../../shared/models'

type CalendarEventProps = {
  event: CustomEvent
}

export const CalendarEvent: FC<CalendarEventProps> = ({
  event: { user, title },
}) => {
  return (
    <div>
      <span>{title} </span>
      <span>- {user.name} </span>
    </div>
  )
}
