import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { PossiblePaths, views } from './routes'

export const CalendarRouter = () => {
  const paths = Object.keys(views) as PossiblePaths[]
  return (
    <BrowserRouter>
      <nav>
        <ul>
          {paths.map((path) => {
            const { name, hide } = views[path]
            return hide ? null : (
              <li>
                <NavLink to={path}>{name}</NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <Routes>
        {paths.map((path) => {
          const { View } = views[path]
          return <Route path={path} element={<View />} />
        })}
      </Routes>
    </BrowserRouter>
  )
}
