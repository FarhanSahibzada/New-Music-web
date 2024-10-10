import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '../lib/utlis'
import { Button } from './ui/moving-border'

function Herosection() {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex
     flex-col justify-center items-center relative overflow-hidden mx-auto' >
             <Spotlight
             className="-top-40 left-0 md:left-60 md:-top-20"
             fill="white"
           />
            <div className='relative z-10 w-full text-center'
            >
                <h1 className='text-white mt-20 md:mt-0 text-4xl md:text-7xl font-bold 
                bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300
                '>Master the art of music</h1>
                <p className=' text-neutral-300 mx-auto text-base md:text-lg font-normal max-w-lg mt-4'>Dive into our comprehensive music courses and transform your musical journey today. Whether you&apos;re
                    a beginerr or looking to refine your skills, join us to unlock your true potential.</p>
                <div  className='text-white mt-6 '>
                    <Link href={"/Courses"}>
                    <Button
                       borderRadius="1.75rem"
                       className="bg-white dark:bg-black/[0.20] text-black font-semibold dark:text-white border-neutral-200 dark:border-slate-800"
                    >Our Courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Herosection