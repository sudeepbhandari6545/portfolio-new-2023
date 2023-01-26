import React from 'react'
import Header from './headers/Headers'
import AboutMe from './about-me/AboutMe'
import Features from './features/Features'
import MyPortfolio from './my-portfolio/MyPortfolio'
import MyResume from './my-resume/MyResume'
import Footers from './footers/Footers'

const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Features />
      <MyPortfolio />
      <MyResume />
      <Footers />
    </>
  )
}

export default Home
