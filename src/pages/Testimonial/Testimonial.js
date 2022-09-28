import React from 'react'
import testiomonial from './../../data/image/testiomonial.png'

const Testimonial = () => {
    return (
        <div className='w-[80%] mx-auto mt-36 bg-white'>
            <div className='flex flex-col items-center font-semibold '>
                <p className='uppercase text-center text-[#3734A9]'>Testimonials</p>
                <p className='font-bold text-5xl mt-6'> Check what our clients are saying</p>
                <div className='flex mt-12'>
                    <div className='flex-1'>
                        <img src={testiomonial} />
                    </div>
                    <div className='flex-1'></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial