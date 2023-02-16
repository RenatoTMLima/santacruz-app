import {
  Container,
  SideBar,
  LogoContainer,
  SideBarContent,
  Content
} from './styles'
import { Link } from '@remix-run/react'

import logo from '../../../public/logo.png'
import cow from '../../../public/icons/cow.svg'
import home from '../../../public/icons/home.svg'
import settings from '../../../public/icons/settings.svg'
import logout from '../../../public/icons/logout.svg'
import type { ReactNode } from 'react'

export const AppMainLayout = ({ children, path }: { children: ReactNode, path: string }) => {
  const currentPathArray = path.split('/')
  const currentPath = currentPathArray[currentPathArray.length - 1]
  
  return (
    <Container>
      <SideBar>
        <LogoContainer>
          <img src={logo} alt="Logo" />
          <h1>Santa Cruz</h1>
        </LogoContainer>
        <SideBarContent>
          <main>
            <Link to="." className={currentPath === 'dashboard' ? 'selected' : ''}>
              <img src={cow} alt="Fazenda" />
              <span>Fazenda</span>
            </Link>
            <Link to="house" className={currentPath === 'house' ? 'selected' : ''}>
              <img src={home} alt="Casa" />
              <span>Casa</span>
            </Link>
          </main>
          <footer>
            <Link to="settings" className={currentPath === 'settings' ? 'selected' : ''}>
              <img src={settings} alt="Settings" />
              <span>Configurações</span>
            </Link>
            <Link to="logout" className={currentPath === 'logout' ? 'selected' : ''}>
              <img src={logout} alt="Logout" />
              <span>Sair</span>
            </Link>
          </footer>
        </SideBarContent>
      </SideBar>
      <Content>
        {children}
      </Content>
    </Container>
  )
}