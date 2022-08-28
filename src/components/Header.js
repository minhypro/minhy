import React from 'react'

const Header = () => {
  const navItems = ['about', 'project', 'contact']

  return (
    <div className='container'>
      <nav className='flex justify-end'>
        {navItems.map((item) => (
          <a href={`#${item}`} key={item} className='p-4 text-gray-400 hover:text-white'>
            <span className='capitalize hidden sm:inline-block  link-underline link-underline-color'>
              {item}
            </span>
          </a>
        ))}
        <span className='p-4 sm:hidden'>Open</span>
      </nav>
    </div>
  )
}

export default Header
