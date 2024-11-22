import { useOutlet, Outlet } from "react-router-dom"

export default function RenderOutlet() {

  const outlet = useOutlet()

  return (
      <>
          {
              outlet
              ?
              <Outlet />
              :
              <>Outlet</>
          }
      </>
  )

}