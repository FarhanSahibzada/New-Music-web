"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

function Cardportion() {
    const testimonials = [
        {
            quote:
                "Music has an undeniable power to touch the soul. It’s not just sound; it’s a language that speaks directly to the heart, a universal language that transcends boundaries, uniting people across cultures and time.",
            name: "Bono",
            title: "Lead Singer of U2",
        },
        {
            quote:
                "Without music, life would indeed be a mistake. It shapes our emotions, gives meaning to moments of joy and sorrow, and adds color to the mundane. It has the profound ability to lift us up when words fall short.",
            name: "Friedrich Nietzsche",
            title: "Philosopher and Composer",
        },
        {
            quote:
                "One good thing about music, when it hits you, it hits deep. It connects us to something greater, to memories, emotions, and experiences that no other medium can. In those moments, music becomes more than just sound—it becomes a feeling.",
            name: "Bob Marley",
            title: "Reggae Legend",
        },
        {
            quote:
                "Music is the divine way to tell beautiful, poetic things to the heart. It bridges the gap between reality and emotion, creating a space where words cannot reach, but where melody and harmony thrive, resonating deep within us.",
            name: "Pablo Casals",
            title: "Cellist and Composer",
        },
        {
            quote:
                "I don’t make music for the eyes. I make music for the ears and the soul. When I sing, I hope that every note carries with it the passion, the heartache, and the joy that I pour into my art, and that it touches the listener in a way they never expected.",
            name: "Adele",
            title: "Grammy Award-Winning Artist",
        },
    ];


    return (
        <div className='h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.20] bg-dot-black/[0.2] relative flex flex-col 
         justify-center items-center  overflow-hidden 
    '>
            <h2 className='text-neutral-400 font-bold text-center text-3xl z-10 mb-8'>Hear Our Harmony : Voice Of Success </h2>
            <div className='flex justify-center  w-full overflow-hidden px-4 sm:px-5 lg:px-6'>
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </div>
    )
}

export default Cardportion