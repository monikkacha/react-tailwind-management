import React from 'react'
import hero_left from '../../data/image/hero_left.png'
import hero_right from '../../data/image/hero_right.png'
import Header from '../../components/Header/Header'

const Hero = () => {
    return (
        <div className='w-screen h-screen relative'>
            <div className='absolute w-full h-full z-0'>
                <img src={hero_left} />
                <img src={hero_right} className='absolute right-0 bottom-0' />
            </div>

            <div className='absolute z-10 w-full'>
                <Header />
            </div>
        </div>
    )
}

export default Hero