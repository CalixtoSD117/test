import Image from 'next/image'
import React from 'react'

export const Card = ({ title, openmodal, imagep }) => {

    

    return (
        <div className='bg-white dark:bg-primary shadow-md md:w-[400px] w-full h-auto rounded-lg cursor-pointer  ' onClick={openmodal} >
            <img className='rounded-t-lg w-full md:h-[300px] h-[200px] object-fill' src={imagep} alt="" />
            <div className=' p-2'>
                <h2 className='text-md text-gray-600'>{title}</h2>
            </div>
        </div>
    )
}
