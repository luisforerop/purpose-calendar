import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PossiblePaths, ViewsType } from '../../shared/models'

type NavBarProps = {
  views: ViewsType
}

export const NavBar: FC<NavBarProps> = ({ views }) => {
  const paths = Object.keys(views) as PossiblePaths[]
  const [userLogged, setUserLogged] = useState(false)

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '100%',
        padding: '16px',
        backgroundColor: '#24252A',
      }}
    >
      <span style={{ color: '#FFF' }}>
        {userLogged ? 'Luis Felipe' : 'Calendario de propósitos'}
      </span>
      <button onClick={() => setUserLogged((curr) => !curr)}>
        <NavLink to={userLogged ? '/login' : '/'}>
          {userLogged ? 'Logut' : 'Login'}
        </NavLink>
      </button>
    </nav>
  )
}
