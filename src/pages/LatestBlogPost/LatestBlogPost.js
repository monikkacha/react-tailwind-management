import React from 'react'
import blog_1 from '../../data/image/blog_1.png'
import blog_2 from '../../data/image/blog_2.png'
import blog_3 from '../../data/image/blog_3.png'
import blog_4 from '../../data/image/blog_4.png'
import blog_5 from '../../data/image/blog_5.png'
import blog_6 from '../../data/image/blog_6.png'

const LatestBlogPost = () => {
    return (
        <div className='w-[80%] mx-auto mt-36'>
            <div className='flex items-center justify-between'>
                <p className='font-bold text-4xl'>Our Latest Blog Posts</p>
                <button className='text-white px-8 py-3 bg-[#F57059] rounded-lg hidden lg:block '>
                    See All Blog Posts
                </button>
            </div>
            <div className='flex flex-col lg:flex-row mt-12 gap-4'>
                <div className='flex-1 flex flex-col'>
                    <img src={blog_1} />
                    <div className='flex gap-4 mt-4'>
                        <span className='text-[#64607D]'>08-11-2022</span>
                        <span className='text-[#64607D]'>Life</span>
                    </div>
                    <p className='mt-4 font-semibold text-lg'>
                        Believing neglected so so allowance existence departure.
                    </p>
                    <p className='font-light text-[#64607D] mt-4'>
                        Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.
                    </p>
                </div>
                <div className='flex-1 flex flex-col'>
                    <img src={blog_2} />
                    <div className='flex gap-4 mt-4'>
                        <span className='text-[#64607D]'>08-11-2022</span>
                        <span className='text-[#64607D]'>Life</span>
                    </div>
                    <p className='mt-4 font-semibold text-lg'>
                        In design active temper be uneasy. Thirty for remove plenty regard you.
                    </p>
                    <p className='font-light text-[#64607D] mt-4'>
                        Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.
                    </p>
                </div>

                <div className='flex-1 flex flex-col mt-6 lg:mt-0'>

                    <div className='flex gap-2'>
                        <img src={blog_3} />
                        <div className='flex flex-col'>
                            <p className='text-[#64607D]'>
                                <span>08-11-2022</span>
                                <span className='ml-3'>Style</span>
                            </p>
                            <p className='font-semibold'>
                                Partiality on or continuing in particular principles
                            </p>
                        </div>
                    </div>

                    <div className='border-t-2 mt-3' />

                    <div className='flex gap-2 mt-3'>
                        <img src={blog_4} />
                        <div className='flex flex-col'>
                            <p className='text-[#64607D]'>
                                <span>08-11-2022</span>
                                <span className='ml-3'>Improvement</span>
                            </p>
                            <p className='font-semibold'>
                                Do believing oh disposing to supported allowance we.                            </p>
                        </div>
                    </div>

                    <div className='border-t-2 mt-3' />

                    <div className='flex gap-2 mt-3'>
                        <img src={blog_5} />
                        <div className='flex flex-col'>
                            <p className='text-[#64607D]'>
                                <span>08-11-2022</span>
                                <span className='ml-3'>Travel</span>
                            </p>
                            <p className='font-semibold'>
                                Village did removed enjoyed explain nor ham saw.                            </p>
                        </div>
                    </div>

                    <div className='border-t-2 mt-3' />

                    <div className='flex gap-2 mt-3'>
                        <img src={blog_6} />
                        <div className='flex flex-col'>
                            <p className='text-[#64607D]'>
                                <span>08-11-2022</span>
                                <span className='ml-3'>Chill</span>
                            </p>
                            <p className='font-semibold'>
                                Securing as informed declared or margaret
                            </p>
                        </div>
                    </div>

                    <div className='border-t-2 mt-3' />

                    <button className='text-white px-8 py-3 bg-[#F57059] rounded-lg block mt-4 lg:hidden '>
                        See All Blog Posts
                    </button>

                </div>
            </div>
        </div>
    )
}

export default LatestBlogPost