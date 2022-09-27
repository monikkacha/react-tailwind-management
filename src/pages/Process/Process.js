import React from 'react'
import process from './../../data/image/process.svg'
import round from './../../data/image/round.png'

const Process = () => {
    return (
        <div className='relative mt-20'>
            <div className='absolute right-0'>
                <img src={round} />
            </div>
            <div className='w-[80%] mx-auto relative lg:mb-[400px]'>
                <div className='flex-col w-full lg:w-[500px]'>
                    <p className='font-bold text-2xl  lg:text-5xl'>We have best team and best process</p>
                    <p className='font-light text-[#64607D] mt-6 text-lg w-[400px]'>
                        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy.
                    </p>
                    <button className='bg-[#F57059] text-white py-3 px-12 mt-6 rounded-full cursor-pointer'>
                        Get Started
                    </button>
                </div>
                <div className='mt-6 block lg:hidden'>
                    <div className='flex flex-col my-4'>
                        <p className='text-6xl text-gray-400 font-bold'>1</p>
                        <p className='font-semibold'>Project Discovery Call</p>
                        <p className='text-[#64607D] mt-2'>
                            Party we years to order allow asked of. We so opinion friends me message as delight.
                        </p>
                    </div>
                    <div className='flex flex-col my-4'>
                        <p className='text-6xl text-gray-400 font-bold'>2</p>
                        <p className='font-semibold'>Project Discovery Call</p>
                        <p className='text-[#64607D] mt-2'>
                            His defective nor convinced residence own. Connection has put impossible own apartments boisterous.
                        </p>
                    </div>
                    <div className='flex flex-col my-4'>
                        <p className='text-6xl text-gray-400 font-bold'>3</p>
                        <p className='font-semibold'>Project Discovery Call</p>
                        <p className='text-[#64607D] mt-2'>
                            From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly.
                        </p>
                    </div>
                </div>
                <div>
                    <img src={process} className='hidden absolute top-0 lg:block' />
                </div>
            </div>
        </div>
    )
}

export default Process