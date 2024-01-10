import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/Trump-logo.png'
import * as FiIcons from 'react-icons/fi'
import * as BsIcons from 'react-icons/bs'
import iosDownload from '../../assets/images/ios-download.png'
import MobileDrawer from './subComp/MobileDrawer'

const Header = () => {
  // BACK TO TOP
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [show, setShow] = useState(false)
  const [headerColor, setHeaderColor] = useState(false)
  useEffect(() => {
    let scrollHandler = () => {
      if (window.scrollY > 10) {
        setShow(true)
      }
      else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [show])

  useEffect(() => {
    let headerHandler = () => {
      if (window.scrollY > 50) {
        setHeaderColor(true)
      }
      else {
        setHeaderColor(false)
      }
    }
    window.addEventListener('scroll', headerHandler)
    return () => {
      window.removeEventListener('scroll', headerHandler)
    }
  }, [headerColor])

  const [mobileDrawerStatus, setMobileDrawerStatus] = useState(false)
  const openDrawer = () => {
    setMobileDrawerStatus(!mobileDrawerStatus)
  }
  return (
    <>
      <div className='bg-white shadow-md sticky top-0 z-[90] transition-all duration-500'>
        <div className='max-w-[--maxWidth] px-6 md:px-8 lg:px-6 py-1 mx-auto flex-between text-center'>
          <div className='w-28 align-middle font-title'>
            <Link to='/' className='text-xl'><img src={logo} className={`${show ? "" : ""}`} /></Link>
          </div>
          <ul className='hidden md:flex-between space-x-6'>
            <li><NavLink to='/' className={({ isActive }) => `${isActive ? "text-customPurple-full text-xl" : `${show ? 'text-yellow-400 text-xl' : "text-yellow-500 text-xl hover:text-customPurple-600"}`} }`}>Home</NavLink></li>
            <li><NavLink to='aboutus' className={({ isActive }) => `${isActive ? "text-customPurple-full text-xl" : `${show ? 'text-yellow-400 text-xl' : "text-yellow-500 text-xl hover:text-customPurple-600"}`}`}>About Us</NavLink></li>
            <li><NavLink to='services' className={({ isActive }) => `${isActive ? "text-customPurple-full text-xl" : `${show ? 'text-yellow-400 text-xl' : "text-yellow-500 text-xl hover:text-customPurple-600"}`}`}>Services</NavLink></li>
            <li><NavLink to='contactus' className={({ isActive }) => `${isActive ? "text-customPurple-full text-xl" : `${show ? 'text-yellow-400 text-xl' : "text-yellow-500 text-xl hover:text-customPurple-600"}`}`}>Contact Us</NavLink></li>
          </ul>
          <button onClick={() => { openDrawer() }} className='md:hidden p-1.5'>
            <FiIcons.FiMenu fontSize={30} />
          </button>
         
        </div>

      {mobileDrawerStatus &&
         <div className='md:hidden h-full inset-0 z-50'>
           <MobileDrawer openDrawer={openDrawer} />
         </div>
       }
      </div>
       
      {
        show &&
        <div onClick={scrollToTop} className="fixed bottom-[20%] border-2 border-yellow-300 right-0 z-[60] bg-slate-100 rounded-full mx-4 my-2 w-14 h-14 flex items-center justify-center cursor-pointer">
          <BsIcons.BsRocket fontSize={26} />
        </div>
      }

    </>
  )
}

export default Header