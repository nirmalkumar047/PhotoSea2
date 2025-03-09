import React from 'react'

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

  return (
    <div className={`flex justify-between items-center p-10 ${darkMode ? 'bg-blue-500 text-black' : 'transparent text-white'}`}>
      <img src="src/assets/Images/logo.png" className='w-[180px]' />

      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:text-blue-500 font-bold cursor-pointer' >Home</li>
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