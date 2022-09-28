import React from 'react'
import project from './../../data/image/project.png'
import { BsApple } from 'react-icons/bs'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

const ProjectManagement = () => {
    return (
        <div className='flex flex-col items-center mt-36'>
            <p className='uppercase font-semibold text-[#F57059]'>
                Project Management App
            </p>
            <p className='text-center mt-6 text-4xl font-bold'>
                Download our app and start your free <br />
                trail to get started today!
            </p>
            <p className='text-center text-[#64607D] mt-6'>
                End-to-end payments and financial management in a single solution.
            </p>
            <div className='flex mt-6 gap-4'>
                <div className='flex text-white bg-[#F57059] py-3 px-6 rounded-full items-center gap-2'>
                    <BsApple /> Appstore
                </div>
                <div className='flex text-white bg-[#05796B] py-3 px-6 rounded-full items-center gap-2'>
                    <IoLogoGooglePlaystore /> Play Store
                </div>
            </div>
        </div>
    )
}

export default ProjectManagement