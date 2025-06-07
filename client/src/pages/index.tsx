import { Link, Outlet } from "react-router"

const Index = () => {
    return <div className="flex min-h-screen leading-none flex-col justify-center text-center">
     <div className="grid grid-cols-4 gap-4">
       <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About</Link>
     </div>
     <Outlet />
    </div>
}

export {
  Index
}