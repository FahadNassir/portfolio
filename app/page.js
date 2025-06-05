"use client"

import React, { useRef } from 'react'
import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

const Page = () => {
  const projectsRef = useRef(null);

  return (
    <div className='flex flex-col gap-5 items-center min-h-screen bg-white'>
      <Home projectsRef={projectsRef} />
      <Projects ref={projectsRef} />
      <Contacts />
    </div>
  )
}

export default Page