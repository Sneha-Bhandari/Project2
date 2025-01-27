import React from 'react'
import AboutBanner from '../Component/PageComponent/About/AboutBanner'
import Therestaurant from '../Component/PageComponent/Home/Therestaurant'
import Best from '../Component/PageComponent/Home/Best'
import Chefs from '../Component/PageComponent/About/Chefs'

const About = () => {
  return (
    <div className=''>
     
    <AboutBanner/>
    <Therestaurant/>
    <Best/>
    <Chefs/>
    </div>
  )
}

export default About
