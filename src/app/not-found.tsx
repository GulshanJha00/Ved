import React from 'react'
import Link from 'next/link'
const notFound = () => {
  return (
    <div className='w-full h-screen bg-black text-white flex justify-center items-center flex-col gap-20'>
      <h1 className='lg:text-7xl sm:text-2xl md:text-5xl text-xl font-extrabold font-mono text-green-500'>Page does not exist</h1>

      <p className='text-2xl'> If you are searching for some particular notes that doesnt exist please 
        <Link href={"/help"} className='text-blue-500'> Click Here</Link></p>

      <Link href={"/"} className='lg:text-4xl sm:text-xl md:text-2xl text-lg font-extrabold  font-mono bg-red-600 text-gray-300 p-5 rounded-2xl'> Go to homepage</Link>
    </div>
  )
}

export default notFound
