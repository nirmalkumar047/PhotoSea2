import React from 'react'

function College() {
return (
    <div className='flex flex-col md:flex-row'>
        <img src="src/assets/Images/college.png" className='h-auto w-full md:h-[600px] md:w-auto pl-0 md:pl-10 transition-transform duration-00 ease-in-out transform hover:scale-105' />

        <div className='flex-col pl-0 md:pl-20 py-10 md:py-30'>
            <h2 className='text-2xl md:text-4xl'>The Happiness of <span className='text-pink-700'>Photography</span></h2>
            <br />
            <h3 className='text-base md:text-xl'>
                Photography is more than just capturing images—it’s a way of capturing joy, preserving memories, and seeing the world from a new perspective. The happiness of photography comes from the little things: the excitement of clicking the perfect shot, the thrill of discovering beauty in everyday moments, and the satisfaction of telling a story through a single frame.
                Whether it's a breathtaking sunset, a candid smile, or the vibrant colors of nature, photography allows us to relive special moments and share emotions with others. It connects us with the world, fuels creativity, and brings a sense of fulfillment as every picture becomes a reflection of our vision and feelings.
                In the end, the true happiness of photography lies in its ability to freeze time and turn fleeting moments into everlasting memories. 📸✨
            </h3>
        </div>
    </div>
)
}

export default College