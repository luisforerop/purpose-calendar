import type { FC, FunctionComponent } from 'react'
import type { Event } from 'react-big-calendar'

export type PossiblePaths = '/login' | '/' | '*'

export interface IView {
  View: FC | FunctionComponent | (() => JSX.Element)
  name: string
  isPrivate?: boolean
  hide?: boolean
}

export type ViewsType = { [key in PossiblePaths]: IView }
