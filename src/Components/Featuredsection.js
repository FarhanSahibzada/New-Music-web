"use client"
import React, { useEffect, useState } from 'react'
import coursedata from '../data/course.json'
import Link from 'next/link'
import { Button } from './ui/moving-border'
import { BackgroundGradient } from './ui/background-gradient'

function Featuredsection() {

    const data = coursedata.courses
    return (
        <div className='py-12 bg-gray-900 '>
            <div>
                <h1 className='font-semibold text-center upperCase text-teal-600 '>Featured Courses</h1>
                <h1 className='text-white font-semibold text-4xl mt-3 text-center '>Learn With The Best</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mt-7 px-10'>
                {data.map((item, index) => (
                    <BackgroundGradient key={index} className='flex justify-center '>
                        <div className='text-center px-4 py-2 flex-grow'>
                            <p className='font-bold text-white  text-base mb-2 '>{item.title}</p>
                            <p className='text-white  font-semibold text-sm'>{item.description}</p>
                            <Link href={"/Courses"}><button className='mt-2 dark:bg-neutral-400 px-3 py-1 rounded-full text-white'>Learn more</button></Link>
                        </div>
                    </BackgroundGradient>
                ))}
            </div>
            <div className='text-center mt-10'>
                <Link href={"/Courses"}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black/[0.02] text-black font-semibold dark:text-white border-neutral-200 dark:border-slate-800"
                    >View All Courses</Button></Link>
            </div>

        </div>
    )
}

export default Featuredsection