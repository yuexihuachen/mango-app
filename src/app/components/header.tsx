import Link from 'next/link';
import Image from "next/image";

export default async function Header() {
  const navigation = [
    { name: 'javascript', href: '/js' },
    { name: 'react', href: '/react' },
    { name: 'angular', href: '/angular' },
    { name: 'css', href: '/css' },
  ];

  return (
    <div className="sticky top-0 z-50 min-h-full bg-white border-b">
      <nav className="bg-white-800">
        <div className="w-9/12 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href='/'>
                  <Image width={24} height={24} className='w-6 h-6' alt='logo' src="/logo-home.svg" priority />
                </Link>
              </div>
              <div className="block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      className={`px-3 py-4 text-sm font-medium text-gray-900 border-b-2 ${'javascript' === item.name? 'border-indigo-500': 'border-white'}`}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
