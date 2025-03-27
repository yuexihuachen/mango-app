import { Outlet, useLocation } from 'react-router';
import { useState, useLayoutEffect } from 'react';
import Cookies from 'js-cookie';
import Header from '~/components/header/header';
import Loading from '~/components/loading/loading';
import Toast from '~/components/toast/gloablToast';
import useFetch from '~/hooks/useFetch';
import CONSTANTS from '~/constants/constants';
import Footer from '~/components/footer/footer';

const protectedRoutes = CONSTANTS.PROTECTED_ROUTES;

const Index = () => {
  const token = Cookies.get('at');
  const location = useLocation();
  const [navigation, setNavigation] = useState([
    { name: '笔记', href: '/note' },
    { name: '类型', href: '/category' },
  ]);

  const { data, loading } = useFetch('/category/find');

  useLayoutEffect(() => {
    if (!loading && !protectedRoutes.includes(location.pathname)) {
      const routes = data.data.map((item) => {
        const uuid = Math.random().toString(36).slice(2, 8);
        return {
          name: item.alias,
          href: `/${uuid}${item.id}`,
        };
      });
      setNavigation(routes);
    }
  }, [loading]);

  const props = {
    token,
    navigation,
  };
  return (
    <div className="content">
      <Header {...props} />
      {/* <div className="py-2">
        <Outlet />
      </div> */}
      <div className="overflow-hidden">
        <div className="px-4 m-auto max-w-screen-2xl md:px-8">
          <Outlet />
        </div>
      </div>
      <Footer />
      <Loading />
      <Toast />
    </div>
  );
};

export default Index;
