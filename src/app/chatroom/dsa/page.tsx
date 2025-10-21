"use client"
import NotSigned from '@/app/NotSigned'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import React from 'react'
// import { useUser } from '@clerk/nextjs'
const page = () => {
    // const user = useUser();

    return (
        <>
            <SignedIn>
                <div>

                </div>
            </SignedIn>






            <SignedOut>
                <NotSigned />
            </SignedOut>
        </>


    )
}

export default page
