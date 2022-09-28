import React from 'react'

const WhyChooseUs = () => {
    return (
        <div className='bg-[#05796B]'>
            <div className='w-[80%] mx-auto py-20 my-20'>
                <div className='flex flex-col lg:flex-row'>

                    <div className='flex-1'>
                        <div className='flex flex-col text-white '>
                            <p className='uppercase font-semibold'>Why choose us</p>
                            <p className='font-bold text-5xl mt-6 max-w-[400px]'>Track your crypto portfolio on the best way possible</p>
                            <p className='max-w-[400px] mt-8 font-light'>
                                Mean if he they been no hold mr. Is at much do made. Latter person am secure of estate genius at.
                            </p>
                        </div>
                    </div>

                    <div className='flex-1 flex flex-col items-center gap-6 justify-center mt-12 lg:mt-0'>
                        <input type="text"
                            className='bg-[#F2F3F4]/50 outline-none border-none p-2 py-3 min-w-[100%] lg:min-w-[50%] rounded-[4px] font-semibold text-white placeholder:text-white/50'
                            placeholder='Email'
                        />
                        <input type="text"
                            className='bg-[#F2F3F4]/50 outline-none border-none p-2 py-3 min-w-[100%] lg:min-w-[50%] rounded-[4px] font-semibold text-white placeholder:text-white/50'
                            placeholder='Password'
                        />
                        <button className='text-white bg-[#F57059] rounded-[4px] min-w-[100%] lg:min-w-[50%] py-3'>
                            Get started
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs