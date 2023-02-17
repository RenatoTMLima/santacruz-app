import { Outlet } from '@remix-run/react'
import { AppMainLayout } from '~/components/AppMainLayout'
import { Summary } from '~/components/Summary'
import { useLocation } from '@remix-run/react'

export default function HomeRoute () {
  const { pathname } = useLocation()
  
  return (
    <AppMainLayout path={pathname}>
      <Summary />
      <Outlet />
    </AppMainLayout>
  )
}