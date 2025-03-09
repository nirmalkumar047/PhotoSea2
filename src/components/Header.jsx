import React from 'react'
import logo from '../assets/Images/logo.png'

function header() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`flex flex-col md:flex-row justify-between items-center p-10 ${darkMode ? 'bg-white text-black' : 'transparent text-white'}`}>
      <img src={logo} className='w-[180px] mb-4 md:mb-0' />

      <button onClick={toggleMenu} className='md:hidden font-bold cursor-pointer mb-4'>
        {showMenu ? 'Hide Menu' : 'Show Menu'}
      </button>

      <ul className={`flex-row md:flex-row gap-4 md:gap-14 mb-4 md:mb-0 ${showMenu ? 'flex' : 'hidden'} md:flex`}>
        <li className='hover:text-blue-500 font-bold cursor-pointer'>Home</li>
        <li className='hover:text-blue-500 font-bold cursor-pointer'>Theme</li>
        <li className='hover:text-blue-500 font-bold cursor-pointer'>Genres</li>
        <li className='hover:text-blue-500 font-bold cursor-pointer'>Contact</li>
      </ul>
      <button onClick={toggleDarkMode} className='font-bold cursor-pointer'>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default header