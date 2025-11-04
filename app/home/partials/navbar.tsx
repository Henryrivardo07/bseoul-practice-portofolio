'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navigationData } from '@/constants/navigation-data';
import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0', 'rgba(12,13,13,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='custom-container flex-between h-16 md:h-21'>
        {/* image */}
        <Image
          src='/images/logo.svg'
          alt='logo'
          width={158}
          height={36}
          className='max-md:h-9 max-md:w-35.25'
        />
        {/* nav */}
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-3'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link href={data.href} className='hover:text-primary-200 p-4'>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* button */}
        <Button asChild className='hidden lg:flex'>
          <Link href='#contact'>Get Started</Link>
        </Button>

        {/* hamburger menu */}

        <Sheet>
          <SheetTrigger asChild>
            <Menu className='cursor-pointer lg:hidden' />
          </SheetTrigger>

          <SheetContent>
            <nav className='mt-16'>
              <ul className='flex flex-col gap-4'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <Link
                      href={data.href}
                      className='hover:text-primary-200 p-4'
                    >
                      {data.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button asChild className='mt-3 w-full'>
              <SheetClose asChild>
                <Link href='#contact'>Get Started</Link>
              </SheetClose>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};
export default Navbar;
