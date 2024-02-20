"use client";
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export const Hero = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">Hi I&apos;m {}</span>
                        <br />
                        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Umesh Basnet',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Mobile Developer',
        1000,
        'Backend Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg mb-6 lg:text-xl">
                        Quis enim sit do velit irure amet laborum eu dolore cupidatat Lorem dolor. Et est ut esse in duis. Do laborum quis ad nisi incididunt nulla mollit deserunt minim enim non eu id. Ex non mollit consectetur enim consectetur.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-600 hover:bg-slate-200 text-black">Hire Me</button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full hover:bg-slate-800   bg-clip-border bg-gradient-to-br from-blue-500 to-pink-500 mt-3"><span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">Download CV</span></button>
                    </div>
                </div>

                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image src="/hero-image.png" alt='hero image' width={300} height={300} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                    </div>
                </div>
            </div>
        </section>
    )
}
