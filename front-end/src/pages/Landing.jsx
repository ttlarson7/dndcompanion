import React from 'react';
import Navbars from '../components/Navbars';
export default function Landing() {
    return ( 
        <div>
            <Navbars page={1} />
            <div className="hero min-h-screen bg-transparent mb-10">
                <div className="hero-content text-center">
                    <div className="flex flex-col">
                        <h1 className="mb-5 text-5xl font-bold opacity-100 text-white">Welcome to</h1>
                    <h1 class="opacity-100 mb-5 animate-text bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent text-9xl font-black">
                            Character Cove!
                        </h1>
                    </div>
                </div>
                </div> 
                <div className="hero min-h-1/2 bg-primary" style={{ opacity: 0.6 }}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://pics.craiyon.com/2024-01-09/nfyXRVbgR76Pga8L7la1Zw.webp" className="max-w-sm rounded-lg shadow-2xl" alt="Confused Beaver Image" />
                        <div>
                        <h1 className="text-5xl font-bold text-w">The perfect place for you to make your next DND character!</h1>
                        <p className="py-6 text-2xl text-white">Tired of continuously erasing and rewriting character sheets? Need oddly specific dice to roll? Well come no further, welcome to
                            Character Cove! The one stop shop for dicing rolling and creating your next DND character. Continuosly edit your character online
                            that way you don't end up with a messy character sheet! Click the sign in button to either sign in or create an account, then all you have to do is
                            clicked "Get Started" to start your character creation journey. In order to use this app make sure you have an internet connection and an account!</p>
                        </div>
                    </div>
            </div>  
        </div>
    )
}
