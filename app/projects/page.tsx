import Header from '@/app/components/projects/Header'
import Projects from '@/app/components/projects/Projects'
import React from 'react'

const page = () => {
  return (
    <main className="w-full h-full">
        {/* Header Section */}
        <Header/>
        {/* Projects Section */}
        <Projects/>
    </main>
  )
}

export default page