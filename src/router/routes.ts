import type { FC, FunctionComponent } from 'react'
import { CalendarScreen, Login, NotFound } from '../views'

export type PossiblePaths = '/login' | '/' | '*'
export interface IView {
  View: FC | FunctionComponent | (() => JSX.Element)
  name: string
  isPrivate?: boolean
  hide?: boolean
}

export type ViewsType = { [key in PossiblePaths]: IView }

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
