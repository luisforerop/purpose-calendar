import type { ViewsType } from '../shared/models'
import { CalendarScreen, Login, NotFound } from '../views'

export const views: ViewsType = {
  '/login': {
    View: Login,
    name: 'Login',
  },
  '/': {
    View: CalendarScreen,
    name: 'Calendar',
    isPrivate: true,
  },
  '*': {
    View: NotFound,
    name: 'NotFound',
    hide: true,
  },
}
