import React from 'react'
import hero_left from '../../data/image/hero_left.png'
import hero_right from '../../data/image/hero_right.png'
import Header from '../../components/Header/Header'
import { AiFillCheckCircle } from 'react-icons/ai'

const Hero = () => {
    return (
        <div className='w-screen h-screen relative'>
            <div className='absolute w-full h-full z-0'>
                <img src={hero_left} />
                <img src={hero_right} className='absolute right-0 bottom-0 hidden lg:block w-1/2' />
            </div>

            <div className='absolute z-10 w-full'>
                <Header />
                <div className='w-[80%] mx-auto mt-12 flex'>
                    <div className='flex-1 flex items-center flex-col lg:block'>
                        <h1 className='font-semibold'>
                            Product Growth Solution in Single Platform.
                        </h1>
                        <p className='font-bold text-4xl md:text-6xl mt-8 text-center lg:text-start'>
                            Managing business
                            payments has never
                            been easier
                        </p>
                        <p className='mt-6 font-light max-w-sm text-[#757095] text-center lg:text-start'>
                            Never at water me might. On formed merits hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.
                        </p>
                        <div className='mt-6 flex flex-col md:flex-row bg-white p-6 items-center w-full'>
                            <div className='flex-1 flex flex-col items-center gap-5 mb-6 md:mb-0 md:items-start md:gap-0'>
                                <label htmlFor="" className='text-gray-500 text-sm'>
                                    Register using email address
                                </label>
                                <input type="text" placeholder='Enter your email...... Here' className='text-xl border-none outline-none font-bold' />
                            </div>
                            <button className='bg-[#1B1C31] text-white font-semibold py-4 px-12 w-full md:w-auto'>
                                Submit
                            </button>
                        </div>
                        <div className='mt-12 flex gap-5'>
                            <div className='flex items-center gap-2'>
                                <AiFillCheckCircle size={20} className='text-[#F57059]' />
                                <span className='text-[#757095]'>Free Register</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <AiFillCheckCircle size={20} className='text-[#F57059]' />
                                <span className='text-[#757095]'>Great Service</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 lg:block hidden'></div>
                </div>
            </div>
        </div>
    )
}

export default Hero