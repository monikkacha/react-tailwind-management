import React, { useState } from 'react'
import { SiVectorlogozone } from 'react-icons/si'
import { CgMenuRight } from 'react-icons/cg'
import { GrClose } from 'react-icons/gr'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div>
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
                        <ul className='font-light hidden lg:flex gap-6 '>
                            <li className='cursor-pointer pb-4 hover:border-[#F57059] hover:border-b-2 transition duration-300'>Home</li>
                            <li className='cursor-pointer pb-4 hover:border-[#F57059] hover:border-b-2 transition duration-300'>Process</li>
                            <li className='cursor-pointer pb-4 hover:border-[#F57059] hover:border-b-2 transition duration-300'>Testimonial</li>
                            <li className='cursor-pointer pb-4 hover:border-[#F57059] hover:border-b-2 transition duration-300'>Blog</li>
                            <li className='cursor-pointer pb-4 hover:border-[#F57059] hover:border-b-2 transition duration-300'>Contact</li>
                        </ul>
                    </div>
                    {/* last buttons */}
                    <div className='hidden lg:flex gap-10 items-center'>
                        <span>Sign in</span>
                        <button className='bg-[#F57059] px-5 py-3 rounded-lg text-white hover:bg-orange-600 transition duration-700'>
                            Start Free
                        </button>
                    </div>
                    <div className='block lg:hidden rounded-full hover:bg-orange-200 transition duration-300 p-2' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <GrClose size={30} className='cursor-pointer text-[#1B1C31] ' /> : <CgMenuRight size={30} className='cursor-pointer text-[#1B1C31] ' />}
                    </div>
                </div>
            </div >

            {/* Mobile Menu */}
            <div className={`bg-[#FFEBCD] fixed top-0 w-72 p-12 h-screen lg:hidden transition duration-300 ${isMenuOpen ? 'left-0' : 'left-[-1000px]'}`}>
                <div>
                    <div className='flex gap-2'>
                        <SiVectorlogozone className='text-[#3734A9]' size={20} />
                        <span className='font-bold text-lg cursor-pointer text-center'>
                            Velcon
                        </span>
                    </div>
                    <ul className='font-light gap-6 mt-12'>
                        <li className='cursor-pointer pb-4 text-[#1B1C31] transition duration-300'>Home</li>
                        <li className='cursor-pointer pb-4 text-[#1B1C31] transition duration-300'>Process</li>
                        <li className='cursor-pointer pb-4 text-[#1B1C31] transition duration-300'>Testimonial</li>
                        <li className='cursor-pointer pb-4 text-[#1B1C31] transition duration-300'>Blog</li>
                        <li className='cursor-pointer pb-4 text-[#1B1C31] transition duration-300'>Contact</li>
                    </ul>
                    <button className='bg-[#F57059] px-5 py-3 rounded-sm text-white hover:bg-orange-600 transition duration-700 w-full mt-6'>
                        Sign In
                    </button>
                    <button className='bg-[#F57059] px-5 py-3 rounded-sm text-white hover:bg-orange-600 transition duration-700 mt-6 w-full'>
                        Start Free
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Header