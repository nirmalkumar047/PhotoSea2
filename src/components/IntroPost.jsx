import React from 'react'

function IntroPost() {
return (
    <div className='flex flex-col md:flex-row p-10 mt-10'>
        <div className='md:w-1/2'>
            <h2 className='text-3xl md:text-5xl pl-0 md:pl-10 mt-10 md:mt-20 w-full md:w-[450px]'> "Capturing Moments, Telling Stories – The Art of <span className='text-pink-800'>Photography</span> "</h2>
            <br /> 
            <h3 className='text-xl md:text-2xl pl-0 md:pl-10'>Photography is more than just taking pictures; it’s about freezing time, preserving emotions, and telling stories through a single frame.</h3>
        </div>
        <img src="src/assets/Images/intro.png" className='w-full md:w-5/6 mt-5 md:mt-0' />
    </div>
)
}


export default IntroPost