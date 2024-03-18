'use client';

import { cn } from '@/lib/utils';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItemsProps = {
  data: Category[];
};

const NavItems: React.FC<NavItemsProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map(({ id, name }) => ({
    href: `/categories/${id}`,
    name,
    active: pathname.startsWith(`/categories/${id}`),
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 ">
      {routes.map(({ href, name, active }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'font-medium transition-colors hover:text-black',
            active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
