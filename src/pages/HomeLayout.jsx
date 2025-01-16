import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <>
    <div>
      <nav>Navbar (layout component we share across children pages)</nav>
      <Outlet />
    </div>
    </>
  )
}
export default HomeLayout