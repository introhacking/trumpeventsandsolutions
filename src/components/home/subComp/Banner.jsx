import React from 'react'
import homeBanner from '../../../assets/images/homeBanner.avif'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div
        className="mx-auto bg-no-repeat relative z-20 w-full h-full"
        style={{
          background: `linear-gradient(312deg, rgba(102, 51, 102, 0.2) 3% , rgba(102, 51, 102, 0.0) 2%) , url(${homeBanner}) `,
          backgroundAttachment: 'fixed',
          backgroundPosition:'center center',
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
        }}
      >
        <div className='flex-end h-screen'>
          <div className='flex-end flex-1 h-full relative z-50' style={{ background: 'linear-gradient(312deg, rgba(102, 51, 102, 0.7) 66% , transparent 50%)' }}>
            <div className='md:w-[80%] lg:w-[55%] flex-start h-full p-3 sm:p-6'>
              <div className='flex-center w-full'>
                <div className='font-[300] px-1 sm:px-0'>
                  <h2 className='text-2xl xs:text-5xl font-[600] mt-6 text-white'>TRUMP EVENTS & SOLUTIONS</h2>
                  <h2 className='text-2xl xs:text-5xl font-[600] mt-2 text-white'>End to End Solution</h2>
                  <div className='my-5'>
                    <p className='text-[17px] xs:text-2xl text-white'>We are a professional exhibition stand builder, with an established unique identity and we constantly strive to create designs with a memorable visual look.</p>
                  </div>
                  <button onClick={()=>{navigate('/aboutus')}} className='my-4 button button--action text-xl font-[500]'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner