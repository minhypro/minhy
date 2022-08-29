import React, { useState, useEffect } from 'react'
import { Navbar, MobileNav, Typography, IconButton } from '@material-tailwind/react'

export default function Header() {
  const [openNav, setOpenNav] = useState(false)
  const navItems = ['about', 'project', 'contact']
  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false))
  }, [])
  const navList = navItems.map((item) => (
    <Typography
      as='div'
      variant='small'
      className='p-1 font-normal capitalize link-underline link-underline-color'
    >
      <a href={`#${item}`} className='flex items-center' onClick={() => setOpenNav(false)} >
        {item}
      </a>
    </Typography>
  ))

  return (
    <Navbar className='mx-auto max-w-screen-xl py-6 px-4 lg:px-8 lg:py-8' color='transparent'>
      <div className='container mx-auto flex items-center justify-end text-blue-gray-900'>
        <div className='hidden lg:block'>
          <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
            {navList}
          </ul>
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav} className='container flex items-end flex-col'>
        {navList}
      </MobileNav>
    </Navbar>
  )
}
