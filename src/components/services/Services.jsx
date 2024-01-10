import React from 'react'
import { ServicesBanner,ServicesLists } from './subComp'

const Services = () => {
  window.scrollTo(0,0)
  return (
    <div>
   <ServicesBanner/>
   <ServicesLists/>
    </div>
  )
}

export default Services