import React from 'react'
import grow_deal from './../../data/image/grow_deal.png'
import grow_icon_1 from './../../data/image/grow_icon_1.svg'
import grow_icon_2 from './../../data/image/grow_icon_2.svg'
import grow_icon_3 from './../../data/image/grow_icon_3.svg'
import { BsArrowRight } from 'react-icons/bs'

const Grow = () => {
    return (
        <div className='grow-bg py-20 mt-[100px] xl:mt-[500px]' >
            <div className='flex flex-col items-center  w-[80%] mx-auto '>

                {/* deal card  */}


                <div className='w-[600px] h-[360px] bg-pink-600 rounded-md relative'>
                    <img src={grow_deal} className='w-full h-full' />
                    <div className='w-full h-full bg-black/50 absolute top-0 left-0 rounded-md' />
                    <div className='w-full h-full flex flex-col items-center justify-center absolute top-0 left-0 gap-3'>
                        <p className='text-white font-bold text-2xl'>
                            Push your product to next level.
                        </p>
                        <p className='text-white text-center font-light w-[460px]'>
                            End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                        </p>
                        <button className='bg-[#FF7F5C] text-white py-2 px-6 rounded-full'>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* some headings  */}
                <div className='mt-24 flex flex-col items-center'>
                    <p className='font-bold text-4xl'>
                        We help your business grow faster.
                    </p>
                    <p className='mt-6 text-light text-[#64607D] w-[400px] text-center'>
                        Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient.
                    </p>
                </div>

                {/* additional cards  */}

                <div className='mt-24 flex flex-col md:flex-row justify-evenly gap-5'>
                    <div className='bg-white p-8 rounded-lg flex flex-col'>
                        <img src={grow_icon_1} className='h-8 w-8' />
                        <p className='mt-6 font-bold text-lg'>
                            Offending belonging
                        </p>
                        <p className='mt-2 text-[#64607D] text-light max-w-[600px]'>
                            Letter of on become he tended active enable to. Vicinity relation sensible sociable surprise screened no up as.
                        </p>
                        <p className='mt-2 font-semibold flex gap-2 items-center text-[#01966B]'>
                            Read More <BsArrowRight />
                        </p>
                    </div>
                    <div className='bg-white p-8 rounded-lg flex flex-col'>
                        <img src={grow_icon_2} className='h-8 w-8' />
                        <p className='mt-6 font-bold text-lg'>
                            Promotion & provision
                        </p>
                        <p className='mt-2 text-[#64607D] text-light max-w-[600px]'>
                            Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.
                        </p>
                        <p className='mt-2 font-semibold flex gap-2 items-center text-[#01966B]'>
                            Read More <BsArrowRight />
                        </p>
                    </div>
                    <div className='bg-white p-8 rounded-lg flex flex-col'>
                        <img src={grow_icon_3} className='h-8 w-8' />
                        <p className='mt-6 font-bold text-lg'>
                            Blessing application
                        </p>
                        <p className='mt-2 text-[#64607D] text-light max-w-[600px]'>
                            Ham windows sixteen who inquiry fortune demands. Is be upon sang fond must shew. Really boy law county she unable her sister.
                        </p>
                        <p className='mt-2 font-semibold flex gap-2 items-center text-[#01966B]'>
                            Read More <BsArrowRight />
                        </p>
                    </div>
                </div>

                <div className='mt-12'>
                    <div className='bg-[#F57059] px-6 py-3 text-white rounded-lg cursor-pointer'>
                        More About Platform
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Grow