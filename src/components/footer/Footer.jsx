import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [getFullYear, setGetFullYear] = useState('')
  const getYearToPrint=()=>{
   const date = new Date()
   const year = date.getFullYear()
   setGetFullYear(year)
  }
  useEffect(() => {
    getYearToPrint()
  }, [])
  
  return (
    <div className='text-center p-6'>&copy; Copyright 2023-{getFullYear} Trump Events & Solutions,<br/>
    All Rights reserved</div>
  )
}

export default Footer