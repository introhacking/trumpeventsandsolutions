import React from 'react'
import serviceBanner from '../../../assets/images/service-banner.jpg'
const ServicesBanner = () => {
  return (
    <div>
        <div className='w-full h-[520px] bg-cover bg-fixed' style={{
        backgroundImage: `linear-gradient(312deg, rgba(0,0,0,.3),rgba(0,0,0,.7)),url(${serviceBanner})`,
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:"cover"
      }}>
      
         <div className="flex flex-col justify-center items-center h-full z-50">
         <div className="w-full mx-auto sm:w-[65%] sm:mx-0 relative overflow-hidden px-3 py-8">
              <div className="py-4">
                <p className="text-white sm:w-[90%] mx-auto text-[23px] sm:text-2xl md:text-3xl">
                When we have a big event, festival or weddings, entertainment is a required thing. Your guest will need entertainment in order to fully enjoy the function.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ServicesBanner