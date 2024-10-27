import React from 'react'
import { Button } from './ui/moving-border'
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect'

function Upcomingweb() {

const webinars  =  [
        {
          title: "Jazz Improvisation Workshop",
          description:
            "A live webinar focused on teaching the art of jazz improvisation, led by renowned jazz musicians.",
          link: "https://jazzwebinar.com",
        },
        {
          title: "Classical Music Composition",
          description:
            "An in-depth look at the techniques of classical music composition, perfect for budding composers.",
          link: "https://classicalcomposition.com",
        },
        {
          title: "Rock Guitar Mastery",
          description:
            "Learn rock guitar techniques from professional musicians in this hands-on webinar.",
          link: "https://rockguitarmastery.com",
        },
        {
          title: "Electronic Music Production",
          description:
            "A comprehensive webinar on producing electronic music, including beat-making, mixing, and mastering.",
          link: "https://electronicproduction.com",
        },
        {
          title: "Vocal Performance Techniques",
          description:
            "A vocal masterclass that teaches performance skills, breathing techniques, and stage presence for singers.",
          link: "https://vocaltechniques.com",
        },
        {
          title: "Songwriting Secrets",
          description:
            "Unlock the secrets to writing hit songs in various genres with expert songwriters.",
          link: "https://songwritingsecrets.com",
        },
      ]

    return (
        <div className='p-12 bg-gray-900 '>
            <div className='max-w-7xl mx-auto  px-4 sm:px-6'>
                <div className='text-center'>
                    <h2 className=' uppercase  tracking-wide text-base text-teal-600 font-bold'> Featured Webinars</h2>
                    <p className='text-white mt-2  font-extrabold text-3xl tracking-tight 
                    leading-8 sm:text-4xl'>Enhance Your Musical Journey</p>
                    </div>
                <div className='mt-10 '>
                <HoverEffect items={webinars} />
                </div>
                <div className='text-center mt-10'>
                <Link href={"/Courses"}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black/[0.02] text-black font-semibold dark:text-white border-neutral-200 dark:border-slate-800"
                    >View All Webinars</Button></Link>
            </div>
            </div>
        </div>

    )
}

export default Upcomingweb