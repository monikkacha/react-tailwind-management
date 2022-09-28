import React from 'react'
import editional_info_1 from './../../data/image/editional_info_1.png'
import editional_info_2 from './../../data/image/editional_info_2.png'
import editional_info_3 from './../../data/image/editional_info_3.png'

const EditionalInfo = () => {
    return (
        <div className='w-[80%] mx-auto mt-12'>


            <div className='w-full bg-white border-2 p-12 rounded-2xl flex flex-col lg:flex-row justify-evenly'>
                <p className='font-bold text-3xl'>
                    Among leave law built now.
                </p>
                {/* normal card */}
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-0 mt-12 lg:mt-0'>
                    <div className='flex items-center gap-4 '>
                        <div className='bg-gray-300 p-4 rounded-lg '>
                            <img src={editional_info_1} />
                        </div>
                        <p className='text-[#64607D] text-2xl'>
                            Village did remov enjoyed
                        </p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='bg-gray-300 p-4 rounded-lg '>
                            <img src={editional_info_2} />
                        </div>
                        <p className='text-[#64607D] text-2xl'>
                            Nay likely  length sooner
                        </p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='bg-gray-300 p-4 rounded-lg '>
                            <img src={editional_info_3} />
                        </div>
                        <p className='text-[#64607D] text-2xl'>
                            Expense windows adapted
                        </p>
                    </div>
                </div>
            </div>

            {/* two cards  */}


            <div className='flex flex-col lg:flex-row mt-12 gap-6'>
                <div className='flex-1 flex flex-col items-center bg-[#F8F9FD] p-12 rounded-lg shadow-md'>
                    <h1 className='text-center text-4xl font-bold'>
                        Offend belong <br />
                        promote provision
                    </h1>
                    <p className='text-[#64607D] mt-6 text-center'>
                        Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income.
                    </p>
                    <button className='bg-[#F57059] px-6 py-3 mt-6 text-white rounded-lg'>
                        Read More
                    </button>
                </div>
                <div className='flex-1 flex flex-col items-center bg-[#F8F9FD] p-12 rounded-lg shadow-md'>
                    <h1 className='text-center text-4xl font-bold'>
                        Consulted ourselves <br />
                        it blessing welcome
                    </h1>
                    <p className='text-[#64607D] mt-6 text-center'>
                        The expense windows adapted sir. Wrong widen drawn ample eat off doors money.
                    </p>
                    <button className='bg-[#F57059] px-6 py-3 mt-6 text-white rounded-lg'>
                        Read More
                    </button>
                </div>
            </div>

        </div>
    )
}

export default EditionalInfo