import { Link } from "react-router-dom"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
// import { FaHome } from "react-icons/fa"
// import { useState } from "react"
// import { FaHandPaper } from 'react-icons/fa';

export default function LandingNav({ page }) {

    if (page === 1) {
        return (
            <div className="sticky top-0 z-50">
                <div className="flex w-full h-16 bg-primary glass items-center justify-between">
                    <div className="flex">
                        <button className="btn btn-active btn-ghost ml-5 text-tertiary">Character Cove</button>
                        <SignedIn>
                            <div className="ml-5">
                                <Link to="/home" className="btn btn-outline btn-tertiary bg-black">Get Started</Link>
                            </div>
                        </SignedIn>
                    </div>
                    <div className="mr-5">
                        <SignedOut>
                            <Link to="/login" className="btn btn-outline btn-warning text-white mr-5">Sign In</Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>
            </div>
        )
    }
    if (page === 2) {
        return (
            <div className="sticky top-0 z-50">
                <div className="flex w-full h-16 bg-primary glass items-center justify-between">
                    <div className="flex">
                        <button className="btn btn-active btn-ghost ml-5 text-tertiary">Character Cove</button>
                    </div>
                    <div className="mr-5">
                        <div className="flex items-center">
                        <Link to="/profile" className="btn btn-outline btn-tertiary bg-black mr-5">Profile</Link>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}