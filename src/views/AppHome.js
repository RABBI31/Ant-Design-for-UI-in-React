import React from 'react'
import About from '../components/common/home/About'
import AppFeatures from '../components/common/home/AppFeatures'
import Faq from '../components/common/home/Faq'
import Hero from '../components/common/home/Hero'
import Works from '../components/common/home/Works'


function AppHome() {
    return (
        <div className='main'>
            <Hero />
            <About />
            <AppFeatures />
            <Works />
            <Faq />
        </div>
    )
}

export default AppHome
