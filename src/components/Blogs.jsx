import React from 'react'
import wild from '../assets/Blogs/wild.jpg'
import concept from '../assets/Blogs/concept.jpg'
import astro from '../assets/Blogs/astro.jpg'
import drone from '../assets/Blogs/drone.jpg'
import spect from '../assets/Blogs/spect.jpg'
import still from '../assets/Blogs/still-life.jpg'
import mono from '../assets/Blogs/mono.jpg'

function Blogs() {
return (
    <div className='p-10'>
        <div className='border border-blue-300 rounded-[15px] p-5 hover:text-blue-300'>
            <h2 className='text-purple-700 text-3xl font-bold inline-block bg-gradient-to-r from-pink-300 to-blue-300 border border-blue-300 rounded-[15px]'>Wildlife Photography</h2>
            <div className='flex flex-col md:flex-row'>
                <img src={wild} className='h-auto md:h-[400px] rounded-[25px] w-full md:w-auto' />
                <h3 className='mt-4 md:mt-0 md:ml-4'>Wildlife photography involves capturing images of various forms of wildlife. Unlike other forms of photography such as product or food photography, successful wildlife photography requires a photographer to choose the right place and right time when specific wildlife are present and active. It often requires great patience and considerable skill and command of the right photographic equipment.</h3>
            </div>
        </div>
        <div className='border border-blue-300 rounded-[15px] p-5 hover:text-blue-300'>
            <h2 className='text-purple-500 text-3xl font-bold inline-block bg-gradient-to-r from-indigo-300 to-green-400 border rounded-[15px]'>Concept Photography</h2>
            <div className='flex flex-col md:flex-row'>
                <h3 className='mt-4 md:mt-0 md:mr-4'>As a methodology conceptual photography is a type of photography that is staged to represent an idea. The 'concept' is both preconceived and, if successful, understandable in the completed image. It is most often seen in advertising and illustration where the picture may reiterate a headline or catchphrase that accompanies it. Photographic advertising and illustration commonly derive from stock photography, which is often produced in response to current trends in image usage as determined by the research of picture agencies like Getty Images or Corbis. These photographs are therefore produced to visualize a predetermined concept.</h3>
                <img src={concept} className='h-auto md:h-[400px] rounded-[25px] w-full md:w-auto' />
            </div>
        </div>
        <div className='border border-blue-300 rounded-[15px] p-5 hover:text-blue-300'>
            <h2 className='text-purple-500 text-3xl font-bold inline-block bg-gradient-to-r from-blue-700 to-gold-400 border rounded-[15px]'>AstroPhotography</h2>
            <div className='flex flex-col md:flex-row'>
                <img src={astro} className='h-auto md:h-[400px] rounded-[25px] w-full md:w-auto' />
                <h3 className='mt-4 md:mt-0 md:ml-4'>Astrophotography, also known as astronomical imaging, is the photography or imaging of astronomical objects, celestial events, or areas of the night sky. The first photograph of an astronomical object (the Moon) was taken in 1839, but it was not until the late 19th century that advances in technology allowed for detailed stellar photography. Besides being able to record the details of extended objects such as the Moon, Sun, and planets, modern astrophotography has the ability to image objects outside of the visible spectrum of the human eye such as dim stars, nebulae, and galaxies. This is accomplished through long time exposure as both film and digital cameras can accumulate and sum photons over long periods of time or using specialized optical filters which limit the photons to a certain wavelength.</h3>
            </div>
        </div>
        <div className='border border-blue-300 rounded-[15px] p-5 hover:text-blue-300'>
            <h2 className='text-purple-500 text-3xl font-bold inline-block bg-gradient-to-r from-green-300 to-blue-300 border rounded-[15px]'>Aerial Photography</h2>
            <div className='flex flex-col md:flex-row'>
                <h3 className='mt-4 md:mt-0 md:mr-4'>Technique of photographing the Earth’s surface or features of its atmosphere or hydrosphere with cameras mounted on aircraft, rockets, or Earth-orbiting satellites and other spacecraft. For the mapping of terrestrial features, aerial photographs usually are taken in overlapping series from an aircraft following a systematic flight pattern at a fixed altitude. Each photograph depicts an area that includes several control points, the locations of which are determined by ground-surveying techniques. A technique known as photogrammetry.</h3>
                <img src={drone} className='h-auto md:h-[400px] rounded-[25px] w-full md:w-auto' />
            </div>
        </div>
        <div className='border border-blue-300 rounded-[15px] p-5 hover:text-blue-300'>
            <h2 className='text-purple-500 text-3xl font-bold inline-block bg-gradient-to-r from-pink-300 to-blue-300 border rounded-[15px]'>Full spectrum Photography</h2>
            <div className='flex flex-col md:flex-row'>
                <img src={spect} className='h-auto md:h-[400px] rounded-[25px] w-full md:w-auto' />
                <h3 className='mt-4 md:mt-0 md:ml-4'>New technological trends in digital photography have opened a new direction in full spectrum photography, where careful filtering choices across the ultraviolet, visible and infrared lead to new artistic visions. Modified digital cameras can detect some ultraviolet, all of the visible and much of the near infrared spectrum, as most digital imaging sensors are sensitive from about 350 nm to 1000 nm. An off-the-shelf digital camera contains an infrared hot mirror filter that blocks most of the infrared and a bit of the ultraviolet that would otherwise be detected by the sensor, narrowing the accepted range from about 400 nm to 700 nm.</h3>
            </div>
        </div>
        <div className='border border-blue-300 rounded-[15px] p-5 hover:text-blue-300'>
            <h2 className='text-purple-500 text-3xl font-bold inline-block bg-gradient-to-r from-blue-500 to-pink-400 border rounded-[15px]'>Still life Photography</h2>
            <div className='flex flex-col md:flex-row'>
                <h3 className='mt-4 md:mt-0 md:mr-4'>Still life photography is a genre of photography used for the depiction of inanimate subject matter, typically a small group of objects. Similar to still life painting, it is the application of photography to the still life artistic style. Tabletop photography, product photography, food photography, found object photography etc. are examples of still life photography. This genre gives the photographer more leeway in the arrangement of design elements within a composition compared to other photographic genres, such as landscape or portrait photography. Lighting and framing are important aspects of still life photography composition.</h3>
                <img src={still} className='h-auto md:h-[400px] rounded-[25px] w-full md:w-auto' />
            </div>
        </div>
        <div className='border border-blue-300 rounded-[15px] p-5 hover:text-blue-300'>
            <h2 className='text-purple-500 text-3xl font-bold inline-block bg-gradient-to-r from-grey-800 to-pink-300 border rounded-[15px]'>Monochrome Photography</h2>
            <div className='flex flex-col md:flex-row'>
                <img src={mono} className='h-auto md:h-[400px] rounded-[25px] w-full md:w-auto' />
                <h3 className='mt-4 md:mt-0 md:ml-4'>Originally, all photography was monochrome, or black-and-white. Even after color film was readily available, black-and-white photography continued to dominate for decades, due to its lower cost, chemical stability, and its "classic" photographic look. The tones and contrast between light and dark areas define black-and-white photography. Monochromatic pictures are not necessarily composed of pure blacks, whites, and intermediate shades of gray but can involve shades of one particular hue depending on the process. The cyanotype process, for example, produces an image composed of blue tones. The albumen print process, publicly revealed in 1847, produces brownish tones.</h3>
            </div>
        </div>
    </div>
)
}

export default Blogs