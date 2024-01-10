import React from 'react'
import { Banner, HomeServices, OurClient } from './subComp'

const Home = () => {
  window.scrollTo(0,0)
  return (
    <>
      <div className=''>
      <Banner />
      <HomeServices/>
      <OurClient/>
      </div>
    </>

  )
}

export default Home