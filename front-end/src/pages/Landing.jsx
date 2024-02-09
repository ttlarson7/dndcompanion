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
                <div className="hero min-h-1/2 bg-muted">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://pics.craiyon.com/2024-01-09/nfyXRVbgR76Pga8L7la1Zw.webp" className="max-w-sm rounded-lg shadow-2xl" alt="Confused Beaver Image" />
                        <div>
                        <h1 className="text-5xl font-bold text-white">The perfect place for you to make your next DND character!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                    </div>    
        </div>
    )
}
