import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark300 light-border sticky left-0 top-0 z-20 flex h-screen w-36 flex-col justify-between overflow-y-auto p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[270px]">
      <div>
        Left Side Bar
      </div>
    </section>
  );
}

export default LeftSideBar