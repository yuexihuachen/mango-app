import Link from 'next/link';
import Image from 'next/image';
import { cookies } from 'next/headers';

export default async function Header() {
  const navigation = [
    { name: '笔记', href: '/note' },
    { name: '类型', href: '/category' },
  ];

  const token = (await cookies()).get('at')?.value;
  
  return (
    <div className="min-h-full border-b border-gray-300">
      <nav className="bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="shrink-0">
                <Link href="/">
                  <Image
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    alt="logo"
                    src="/logo-home.svg"
                    priority
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      className={`px-3 py-5 text-sm font-medium relative text-gray-900 after:w-full after:h-0.5 after:absolute after:-bottom-0.5 after:left-0 ${
                        'note' === item.name
                          ? 'after:bg-indigo-500 font-medium'
                          : 'hover:after:bg-indigo-500'
                      }`}
                      href={item.href}
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
                  className="relative p-1 text-gray-400 rounded-full cursor-pointer"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only"></span>
                  {token ? (
                    <Link href="/signout">
                      <Image
                        width={20}
                        height={20}
                        className="w-5 h-5"
                        alt="logo"
                        src="/login.svg"
                        priority
                      />
                    </Link>
                  ) : (
                    <Link href="/signin">
                      <Image
                        width={20}
                        height={20}
                        className="w-5 h-5"
                        alt="logo"
                        src="/log-out.svg"
                        priority
                      />
                    </Link>
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

                <Image
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  alt="logo"
                  src="/head-menu.svg"
                  priority
                />
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Reports
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <button
                type="button"
                className="relative p-1 ml-auto text-gray-400 rounded-full shrink-0"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only"></span>
                <Image
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt="logo"
                  src="/log-out.svg"
                  priority
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
