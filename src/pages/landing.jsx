import { useOutlet, Outlet } from "react-router-dom"

import LandingPageView from '@/page-sections/landing/page-view';

export default function LandingPage() {

  const outlet = useOutlet()

  return (
      <>
          {
              outlet
              ?
              <Outlet />
              :
              <LandingPageView />
          }
      </>
  )

}