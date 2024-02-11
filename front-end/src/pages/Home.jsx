import React from 'react';
import Navbars from '../components/Navbars';
import { useUser } from "@clerk/clerk-react"
import { useState } from "react"
export default function Home() {
    const [user, setUser] = useState(useUser().user)
    return (
        <div>
            <Navbars page={2} />
            
        </div>
    );
}