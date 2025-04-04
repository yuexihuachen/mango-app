import { useLocation, Link, useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import CONSTANTS from '~/constants/constants';

export default function Header(props) {
  const { navigation } = props;
  const location = useLocation();
  const navigator = useNavigate();

  const signOut = () => {
    Cookies.remove('at');
    Cookies.remove('rt');
    navigator('/note');
  };
  return (
    <div className="sticky top-0 z-50 min-h-full border-gray-300 shadow-md">
      <nav className="bg-white">
        <div className="w-9/12 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="shrink-0">
              <Link
              to={'/'}>
                  <img
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    alt="logo"
                    src="/hudie1.svg"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      className={`px-3 py-5 text-sm font-medium relative text-gray-900 after:w-full after:h-0.5 after:absolute after:-bottom-0.5 after:left-0 ${
                        location.pathname === item.href
                          ? 'after:bg-indigo-500 font-medium'
                          : 'hover:after:bg-indigo-500'
                      }`}
                      to={item.href}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center ml-4 md:ml-6">
                <button
                  type="button"
                  onClick={signOut}
                  className="relative p-1 text-gray-400 rounded-full cursor-pointer"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only"></span>
                  { CONSTANTS.PROTECTED_ROUTES.includes(location.pathname) && (
                    <img
                      width={20}
                      height={20}
                      className="w-5 h-5"
                      alt="signout"
                      src="/log-out.svg"
                    />
                  )}
                </button>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only"></span>

                <img
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  alt="signout-menu"
                  src="/head-menu.svg"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                className={`block px-3 py-2 text-base font-medium text-gray-900 rounded-md ${
                  location.pathname === item.href
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white'
                }`}
                to={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-300">
            <div className="flex items-center px-5">
              <button
                type="button"
                className="relative p-1 ml-auto text-gray-400 rounded-full shrink-0"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only"></span>
                <img
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt="sign-out"
                  src="/log-out.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
