import { useOutlet, Outlet } from "react-router-dom"

import Home from './home';

export default function AppLanding() {

  const outlet = useOutlet()

  return (
      <>
          {
              outlet
              ?
              <Outlet />
              :
              <Home />
          }
      </>
  )

}