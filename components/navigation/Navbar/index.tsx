import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggler } from './ThemeToggler'
import MobileNavigation from './MobileNavigation'

const Navbar = () => {
  return (
    <nav className='flex-between background-light900_dark200 w-full fixed z-50 gap-5 p-6 shadow-light-300 dark:shadow-dark-200'>
        <Link className='flex items-center gap-2' href="/">
            <Image src="/images/site-logo.svg" alt="logo" width={32} height={32} />
            <p className='text-dark-100 dark:text-light-900 max-sm:hidden h2-bold'>Dev<span className='text-orange-500'>Flow</span></p>
        </Link>

        <p className='text-dark-100 dark:text-light-900 max-sm:hidden'>Global Search</p>

        <div className='flex-between gap-5'>
          <ThemeToggler />
          <div className='md:hidden'>
            <MobileNavigation />
          </div>
        </div>
    </nav>
  )
}

export default Navbar;
