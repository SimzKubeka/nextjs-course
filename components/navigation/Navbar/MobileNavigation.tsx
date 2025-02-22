import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from 'next/link';
import ROUTES from '@/constants/routes';
import { Button } from '@/components/ui/button';
import NavLinks from '../NavLinks';
const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          alt="Menu"
          width={36}
          height={36}
          className="md:hidden invert-colors"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark300 border-transparent shadow-none"
      >
        <SheetTitle className="text-light-100 text-2xl font-bold hidden">
          Navigation
        </SheetTitle>
        <Link className="flex items-center gap-2" href="/">
          <Image
            src="/images/site-logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <p className="text-dark-100 dark:text-light-900 h2-bold">
            Dev<span className="text-orange-500">Flow</span>
          </p>
        </Link>
        <div className="no-scrollbar flex flex-col h-[calc(100vh-80px)] gap-6 justify-end overflow-y-auto">
          <SheetClose asChild>
            <section className="flex flex-col h-full pt-16 gap-6">
              <NavLinks isMobileNav/>
            </section>
          </SheetClose>

          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="btn-secondary small-medium min-h-[46px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Sign In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="btn-tertiary text-dark100_light900 light-border-2 border small-medium min-h-[46px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span>Sign Up</span>
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavigation