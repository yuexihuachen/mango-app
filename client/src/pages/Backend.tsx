import { Outlet } from 'react-router';

const Backend = () => {
    return <div className="flex min-h-screen leading-none flex-col justify-center text-center">
      <h1 className="text-6xl font-bold">backend</h1>
      <Outlet />
    </div>
}

export default Backend