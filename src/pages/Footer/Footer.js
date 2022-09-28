import React from 'react'
import { SiVectorlogozone } from 'react-icons/si'

const Footer = () => {
    return (
        <div className='my-12 w-[80%] mx-auto'>

            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Menus */}

                <div className='flex-1 '>
                    <div className='flex'>
                        <SiVectorlogozone className='text-[#3734A9]' size={20} />
                        <span className='font-bold text-lg cursor-pointer text-center'>
                            Velcon
                        </span>
                    </div>
                </div>
                <div className='flex-1 mt-12 lg:mt-0'>
                    <p className='font-semibold text-lg'>
                        Company
                    </p>
                    <ul className='mt-12'>
                        <li className='my-6 text-light cursor-pointer capitalize'>About us</li>
                        <li className='my-6 text-light cursor-pointer capitalize'>careers</li>
                        <li className='my-6 text-light cursor-pointer capitalize'>blog</li>
                        <li className='my-6 text-light cursor-pointer capitalize'>pricing</li>
                    </ul>
                </div>
                <div className='flex-1 mt-12 lg:mt-0'>
                    <p className='font-semibold text-lg'>
                        Resource
                    </p>
                    <ul className='mt-12'>
                        <li className='my-6 text-light cursor-pointer capitalize'>templates</li>
                        <li className='my-6 text-light cursor-pointer capitalize'>tutorials</li>
                        <li className='my-6 text-light cursor-pointer capitalize'>free resources</li>
                        <li className='my-6 text-light cursor-pointer capitalize'>contract templates</li>
                    </ul>
                </div>


                {/* Join news latter  */}
                <div className='flex-1 mt-12 lg:mt-0'>
                    <p className='font-semibold text-lg'>
                        Join Our Newsletter
                    </p>
                    <div className='bg-gray-200 flex justify-between mt-4'>
                        <input type="text" className='bg-transparent outline-none border-none px-2' placeholder={'Your email address'} />
                        <button className='bg-[#00E1F0] text-white py-2 px-4 cursor-pointer '>
                            Subscribe
                        </button>
                    </div>
                    <p className='mt-4 text-light text-[#181433]'>
                        *  Will send you weekly updates for your better
                        finance management.
                    </p>
                </div>
            </div>

            <div className='mt-12 border-t-2'></div>
            <p className='my-12 text-center text-[#181433]'>
                Copyright @ Velcon 2022. All Rights Reserved.
            </p>

        </div>
    )
}

export default Footer