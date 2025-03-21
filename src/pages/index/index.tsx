import { Outlet, useLocation } from 'react-router';
import {useState, useLayoutEffect} from 'react';
import Cookies from 'js-cookie';
import Header from '~/components/header/header';

const Index = () => {
  const token = Cookies.get('at');
  const location = useLocation();
  const [navigation, setNavigation] = useState([
    { name: '笔记', href: '/note' },
    { name: '类型', href: '/category' },
  ])
  useLayoutEffect(() => {
    if (location.pathname === '/') {
      setNavigation([{ name: '类型', href: '/category' }])
    }
  }, [])

  const props = {
    token,
    navigation
  }
  return (
    <div className="content">
      <Header {...props}/>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
