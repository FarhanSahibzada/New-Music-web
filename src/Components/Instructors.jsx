 "use client"
import React from 'react'
import { WavyBackground } from './ui/wavy-background';
import { AnimatedTooltip } from './ui/animated-tooltip';

function Instructors() {
    const artists = [

        {
            id: 1,
            name: "Adele",
            role: "Singer-Songwriter",
            image:
                "https://images.unsplash.com/photo-1517230878791-4d28214057c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWRlbGUlMjBzaW5nZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 2,
            name: "John Mayer",
            role: "Guitarist and Singer",
            image:
                "https://images.unsplash.com/photo-1575285113814-f770cb8c796e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBhcnRpc3R8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 3,
            name: "Billie Eilish",
            role: "Pop Artist",
            image:
                "https://images.unsplash.com/photo-1647968678725-5bf93bf20a10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlsbGllJTIwZWlsaXNofGVufDB8fDB8fHww",
        },
        {
            id: 4,
            name: "Hans Zimmer",
            role: "Film Composer",
            image:
                "https://images.unsplash.com/photo-1657042855066-7f09c6c2c350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWMlMjBhcnRpc3R8ZW58MHx8MHx8fDA%3D",
        },
        {
            id: 5,
            name: "Taylor Swift",
            role: "Pop & Country Singer",
            image:
                "https://images.unsplash.com/photo-1508214665949-7b7cb56e3bb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRhaWxvciUyMHN3aWZ0JTIwc2luZ2VyfGVufDB8fDB8fHww",
        },
    ];

    return (
        <div className=' relative h-[40rem] flex justify-center items-center  overflow-hidden'>
            <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col justify-center items-center h-full'>
                <h2 className='font-bold text-2xl text-center md:text-4xl mb-6 lg:text-7xl text-white '>Meet Our Instructors</h2>
                <p className='text-white  text-center text-base md:text-lg font-semibold mb-6'>Discover the talented professionals 
                    who will guide your musical journey</p>
                    <div className='flex flex-row justify-center items-center mb-6'>
                    <AnimatedTooltip items={artists} />
                    </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors