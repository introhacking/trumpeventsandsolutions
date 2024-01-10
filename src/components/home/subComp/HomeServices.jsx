import React from 'react'
import exhibitationStall from '../../../assets/images/exhibitaion-stall.avif'
import branding from '../../../assets/images/branding.avif'
import confrence from '../../../assets/images/conference.avif'
import giftsolution from '../../../assets/images/gift-solution.avif'
import { Link } from 'react-router-dom'

const HomeServices = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-fullWidth mx-auto px-4 py-8'>
                <div className='text-center'>
                    <h3 className='text-xl xs:text-3xl sm:text-4xl md:w-3/5 mx-auto text-center font-[600] pt-4 my-2 '>Our Services</h3>
                </div>
                <div>
                    <div className='text-center'>
                        <span className='py-1 px-2 text-customPurple-900 text-xl rounded'>Click on images to learn more</span>
                    </div>
                    <div className='flex justify-around flex-wrap py-8 gap-8 sm:gap-6'>
                        <div className='rounded group overflow-hidden xs:w-[70%] sm:w-1/2 md:w-[40%] lg:w-[30%] relative bg-gradient-to-r from-green-300 to-amber-100/40 text-center text-gray-600'>
                            <div className='flex-between flex-col h-full rounded'>
                                <img className='rounded h-full' src={exhibitationStall} alt='exhibitationStall' />
                                <Link to='/services'>
                                    <div className="rounded text-center p-6 transition-all duration-700 absolute top-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
                                        <p className="text-center py-2 text-2xl flex justify-center items-center h-full tracking-wider">
                                        Exhibition Stand Design And Construction
                                        </p>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <div className='rounded group overflow-hidden xs:w-[70%] sm:w-1/2 md:w-[40%] lg:w-[30%] relative bg-gradient-to-r from-green-300 to-amber-100/40 text-center text-gray-600'>
                            <div className='flex-between flex-col h-full rounded'>
                                <img className='rounded-t h-full' src={confrence} alt='confrence' />
                                 <Link to='/services'>
                                    <div className="rounded text-center p-6 transition-all duration-700 absolute top-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
                                        <p className="text-center py-2 text-2xl flex justify-center items-center h-full tracking-wider">
                                        Conference
                                        </p>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <div className='rounded group overflow-hidden xs:w-[70%] sm:w-1/2 md:w-[40%] lg:w-[30%] relative bg-gradient-to-r from-green-300 to-amber-100/40 text-center text-gray-600'>
                            <div className='flex-between flex-col'>
                                <img className='rounded-t h-full' src={branding} alt='branding' />
                                 <Link to='/services'>
                                    <div className="rounded text-center p-6 transition-all duration-700 absolute top-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
                                        <p className="text-center py-2 text-2xl flex justify-center items-center h-full tracking-wider">
                                        Brand Activation
                                        </p>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        <div className='rounded group overflow-hidden xs:w-[70%] sm:w-1/2 md:w-[40%] lg:w-[30%] relative bg-gradient-to-r from-green-300 to-amber-100/40 text-center text-gray-600'>
                            <div className='flex-between flex-col'>
                                <img className='rounded-t h-full' src={giftsolution} alt='giftsolution' />
                                  <Link to='/services'>
                                    <div className="rounded text-center p-6 transition-all duration-700 absolute top-0 group-hover:right-0 -right-[100%] bg-sky-100 h-full w-full">
                                        <p className="text-center py-2 text-2xl flex justify-center items-center h-full tracking-wider">
                                        Customized Gifting Solutions
                                        </p>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeServices