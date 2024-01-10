import React from 'react'
import './OurClients.css'
import ncteLogo from '../../../assets/images/ncte-logo.png'
import tripjackLogo from '../../../assets/images/tripjack-logo.png'
import epsonLogo from '../../../assets/images/epson-logo.jpg'
import wiproLogo from '../../../assets/images/wipro-logo.png'
import bryairLogo from '../../../assets/images/bryair-logo.jpg'
import birlaLogo from '../../../assets/images/birla-logo.jpg'
import croptonLogo from '../../../assets/images/crompton-logo.png'

const OurClient = () => {
  return (
    <div className='space-y-6 bg-customPurple-50 text-center '>
        <div className='logos max-w-maxWidth mx-auto'>
                <h2 className='text-xl xs:text-3xl sm:text-4xl md:w-3/5 mx-auto text-center font-[600] pt-4 my-2 '>Our Clients</h2>
                <div className='logos-slide'>
                    {/* <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center border" /> */}
                    <img alt="epson" src={epsonLogo} className="h-32" />
                    <img alt="ncte" src={ncteLogo} className="h-32" />
                    <img alt="tripjack" src={tripjackLogo} className="h-32" />
                    <img alt="wipro" src={wiproLogo} className="h-32" />
                    <img alt="bryair" src={bryairLogo} className="h-32" />
                    <img alt="birla" src={birlaLogo} className="h-32" />
                    <img alt="cropton" src={croptonLogo} className="h-32" />
                </div>
            </div>
           
    </div>
  )
}

export default OurClient