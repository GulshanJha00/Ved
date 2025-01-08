import React from 'react'
import Link from 'next/link'

const notFound = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white flex justify-center items-center flex-col gap-20'>
      <h1 className='lg:text-7xl sm:text-3xl md:text-5xl text-2xl font-extrabold font-mono text-green-400'>
        Page does not exist
      </h1>

      <p className='text-2xl text-center'>
        If you are searching for some particular notes that don&apos;t exist, please 
        <Link href={"/help"} className='text-blue-400 hover:text-blue-500 transition-colors duration-200'> Click Here</Link>
      </p>

      <Link href={"/"} className='lg:text-4xl sm:text-xl md:text-2xl text-lg font-extrabold font-mono bg-red-600 text-white p-6 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300'>
        Go to Homepage
      </Link>
    </div>
  )
}

export default notFound
