import NotSigned from '@/app/NotSigned'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <>
    <SignedIn>
    <div>
      
    </div>
    </SignedIn>
    <SignedOut>
        <NotSigned/>
    </SignedOut>

    </>

  )
}

export default page
