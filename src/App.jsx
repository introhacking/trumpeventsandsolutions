import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { About, Services, Contact, Home } from './components'
import Error from './components/Error.jsx'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="*" element={<Error errMsg="Page not Found" />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
