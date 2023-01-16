import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from '../components'
import { PossiblePaths } from '../shared/models'
import { views } from './routes'

export const CalendarRouter = () => {
  const paths = Object.keys(views) as PossiblePaths[]
  return (
    <BrowserRouter>
      <NavBar views={views} />
      <Routes>
        {paths.map((path) => {
          const { View } = views[path]
          return <Route path={path} element={<View />} key={path} />
        })}
      </Routes>
    </BrowserRouter>
  )
}
