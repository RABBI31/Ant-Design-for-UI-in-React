import React from 'react'
import About from '../components/common/home/About'
import AppFeatures from '../components/common/home/AppFeatures'
import Hero from '../components/common/home/Hero'
import Works from '../components/common/home/Works'


function AppHome() {
    return (
        <div className='main'>
            <Hero />
            <About />
            <AppFeatures />
            <Works />
        </div>
    )
}

export default AppHome
