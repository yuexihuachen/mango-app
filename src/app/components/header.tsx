import Link from 'next/link';
import Image from 'next/image';
import { headers } from 'next/headers';

export default async function Header() {
  const header = await headers();
  const path = header.get('x-current-path');
  const navigation = [
    { name: 'javascript', href: '/js' },
    { name: 'react', href: '/react' },
    { name: 'angular', href: '/angular' },
    { name: 'css', href: '/css' },
  ];

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
                        path === item.href
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
                  alt="signout-menu"
                  src="/head-menu.svg"
                  priority
                />
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                className={`block px-3 py-2 text-base font-medium text-gray-900 rounded-md ${
                  path === item.href ? 'bg-indigo-600 text-white' : 'bg-white'
                }`}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
