import React from 'react'
import './App.css'
import Hero from './pages/Hero/Hero.js'
import Process from './pages/Process/Process.js'
import Grow from './pages/Grow/Grow.js'
import EditionalInfo from './pages/EditionalInfo/EditionalInfo.js'
import Testimonial from './pages/Testimonial/Testimonial.js'
import ProjectManagement from './pages/ProjectManagement/ProjectManagement.js'
import LatestBlogPost from './pages/LatestBlogPost/LatestBlogPost.js'
import WhyChooseUs from './pages/WhyChooseUs/WhyChooseUs.js'
import Footer from './pages/Footer/Footer.js'

const App = () => {
    return (
        <div className='bg-gray-100 overflow-x-hidden'>
            <Hero />
            <Process />
            <Grow />
            <EditionalInfo />
            <Testimonial />
            <ProjectManagement />
            <LatestBlogPost />
            <WhyChooseUs />
            <Footer />
        </div>
    )
}

export default App