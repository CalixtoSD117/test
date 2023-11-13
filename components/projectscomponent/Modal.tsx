import React from 'react'
import { RiCloseLine } from "react-icons/ri";
import { Slider } from './Slider';
import Image from 'next/image';
export const Modal = ({ modal, setmodal, title, desc, img1, img2, img3, img4}) => {

    const handleModalClose = () => {
        setmodal(false)
    }

    const slides = [
        img1,
        img2,
        img3,
        img4
    ]

    return (
        <>
            {
                modal ? (
                    <div className='bg-black bg-opacity-25  w-full h-screen top-0 left-0 bottom-0 right-0 fixed backdrop-blur-sm !z-[9999]'>
                        <div className='flex justify-center items-center h-[100vh] container '>
                            <div className='bg-white dark:bg-[#1D2144] rounded-lg md:w-[920px] md:h-[880px]'>
                                <div className='md:text-3xl text-2xl flex justify-end items-center p-2'>
                                    <button onClick={handleModalClose} className='hover:bg-dark hover:dark:bg-body-color hover:text-white hover:animate-pulse rounded-md transition-all '>
                                        <RiCloseLine />
                                    </button>
                                </div>
                                <div className='md:p-7 p-5 pt-0'>
                                    <div className='w-full h-full rounded-md right-0 left-0 '>
                                        {/* aqui va el slider */}
                                        <Slider autoSlide={true} autoSlideInterval={4000}>
                                            {
                                                slides.map((slide) => (
                                                    <img key={slide} src={slide} alt="" className='w-fit right-0 rounded-md' />
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                    <div className='text-center mt-5'>
                                        <h1 className='text-2xl font-semibold text-gray-700'>
                                            {title}
                                        </h1>
                                        <div className='mt-5 overflow-y-auto md:text-base text-sm h-40 md:h-auto'>
                                            <p className='text-gray-500 text-justify'>
                                                {desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}
