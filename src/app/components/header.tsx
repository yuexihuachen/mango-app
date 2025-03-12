import Link from 'next/link'

export default function Header() {
    const navigation = [
        { name: 'Dashboard', href: '/'},
        { name: 'login', href: '/login' },
        { name: 'register', href: '/register' },
        { name: 'note', href: '/note' },
        { name: 'category', href: '/category' },
    ];

    return <div className="hidden md:block">
    <div className="flex items-baseline ml-10 space-x-4">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`bg-gray-900 text-white`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>
}