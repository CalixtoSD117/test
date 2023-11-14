import React, { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
export const Slider = ({ children: slides, autoSlide = false, autoSlideInterval = 2000 }) => {

    const [curr, setcurr] = useState(0)

    const prev = () => setcurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = () => setcurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])


    return (
        <div>
            <div className='overflow-hidden relative '>
                <div className='flex transition-transform ease-in-out duration-300 w-full xl:h-[410px] rounded-md' style={{ transform: `translateX(-${curr * 100}%)` }} >
                    {slides}
                </div>
                <div className='absolute inset-0 flex items-center justify-between md:p-4 p-1'>
                    <button onClick={prev} className='md:p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white dark:text-[#1D2144]'>
                        <ChevronLeft />
                    </button>
                    <button onClick={next} className='md:p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white dark:text-[#1D2144]'>
                        <ChevronRight />
                    </button>
                </div>
                <div className='absolute bottom-4 right-0 left-0'>
                    <div className='flex justify-center gap-2'>
                        {slides.map((slide, index) => (
                            <div key={index} className={`transition-all w-1.5 h-1.5 bg-primary  rounded-full ${curr === index ? 'p-0.5 h-2 w-2' : 'bg-opacity-50'}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
