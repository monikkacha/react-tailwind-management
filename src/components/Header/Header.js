import React from 'react'
import { SiVectorlogozone } from 'react-icons/si'

const Header = () => {
    return (
        <div className='w-[80%] mx-auto pt-10'>
            <div className='flex justify-between '>
                <div className='flex gap-2'>
                    <SiVectorlogozone className='text-[#3734A9]' size={20} />
                    <span className='font-bold text-lg cursor-pointer text-center'>
                        Velcon
                    </span>
                </div>
                {/* nav menu */}
                <div>
                    <ul className='font-light flex gap-6'>
                        <li className='cursor-pointer pb-4 hover:border-[#F57059] hover:border-b-2 transition duration-300'>Home</li>
                        <li className='cursor-pointer pb-4 hover:border-[#F57059] hover:border-b-2 transition duration-300'>Process</li>
                        <li className='cursor-pointer pb-4 hover:border-[#F57059] hover:border-b-2 transition duration-300'>Testimonial</li>
                        <li className='cursor-pointer pb-4 hover:border-[#F57059] hover:border-b-2 transition duration-300'>Blog</li>
                        <li className='cursor-pointer pb-4 hover:border-[#F57059] hover:border-b-2 transition duration-300'>Contact</li>
                    </ul>
                </div>
                {/* last buttons */}
                <div className='flex gap-10 items-center'>
                    <span>Sign in</span>
                    <button className='bg-[#F57059] px-5 py-3 rounded-lg text-white hover:bg-orange-600 transition duration-700'>
                        Start Free
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header