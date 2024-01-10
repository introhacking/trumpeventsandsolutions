import React from 'react'
import aboutBanner from '../../assets/images/about-banner.jpg'

const About = () => {
  window.scrollTo(0,0)
  return (
    <div>
      <div className='w-full h-[520px] bg-cover bg-fixed' style={{
        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,.5),rgba(0,0,0,.2)),url(${aboutBanner})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <div className="flex flex-col justify-center items-center h-full z-50 px-4 sm:px-8">
          <div className="w-full sm:w-[70%] box relative overflow-hidden px-2 py-8">
            <div className="py-4 text-center space-y-4">
              <h1 className='text-3xl xs:text-4xl md:text-7xl text-white uppercase font-bold tracking-[2px] drop-shadow-2xl'>About <span className="text-customPurple-full">Trump Events & solutions</span> </h1>
              <p className="text-white sm:w-[90%] mx-auto text-xl sm:text-2xl md:text-3xl">
              TRUMP EVENTS & SOLUTIONS is an “End to End Solution Provider” Right from Conceptualization to Completion of an Event.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-fullWidth mx-auto px-4 py-6 text-center'>
        <h3 className='font-[600] mb-8'><span className='decoration-indigo-500 underline'> ABOUT TRUMP EVENTS & SOLUTIONS</span> </h3>
        <p><span className='font-semibold text-[18px]'>TRUMP EVENTS & SOLUTIONS </span> is a 360° Event Management company comprising a bunch of talented,
          innovative & dedicated employees. We are specialized in providing solutions for <span className='font-semibold text-[18px]'>“Exhibition Stand”.</span>
          We are a renowned established company for creative events. We design a variety of events and healthy
          coordination among team members to let you enjoy the hassle-free and unmatched experience.
          <br />
          <br />
          We work together to design, create and produce work that we are pleased with for Clients that we
          believe. creative disciplines for a spread of jobs and projects. Our solutions are result-oriented and
          delivered with quality service much before the time frame. Along the way, we have gained the trust and
          confidence of our clients and worked with them as their preferred event partners. Over the years, our
          range of events, show cases, impactful and tailor-made events for various corporate houses, media
          agencies, and individuals across the country.
          <br />
          <br />
          <span className='font-semibold text-[18px]'>TRUMP EVENTS & SOLUTIONS </span> is an <span className='font-semibold text-[18px]'>“End to End Solution Provider”</span> Right from Conceptualization to
          Completion of an Event i.e., engaged in providing infrastructural services for Exhibitions, Conferences,
          Seminars, Brand Activation, Corporate Gifting, etc.</p>
      </div>

    </div>
  )
}

export default About