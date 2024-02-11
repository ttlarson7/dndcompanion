import React, { useContext } from 'react';
import { useUser } from "@clerk/clerk-react"
import Navbars from '../components/Navbars';
import { useState } from "react"
export default function Profile() {
    const user = useUser().user;
    const [newUsername, setNewUsername] = useState('')
    
    const getNewUsername = (e) => {
        e.preventDefault();
        setNewUsername(e.target.value)
        console.log(newUsername)
    }
    const updateUsername = (e) => {
        e.preventDefault();
        user
            .update({ username: newUsername })
            .then((updatedUser) => {
                console.log("Username updated successfully:", updatedUser);
                // Optionally update the user object or perform other actions
            })
            .catch((error) => {
                console.error("Failed to update username:", error);
                // Handle the error appropriately
            });
    };
    return (
        <div>
            <Navbars page={3} />
            <div className="flex items-center mt-10 flex-col">
                <h1 className="text-5xl">Welcome to your profile, {user.fullName}</h1>
                <div className = "mt-20 flex">
                    <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                    {user.username ? (
                        <h2 className="card-title">{user.username}</h2>
                        ) : (
                        <h2 className="card-title">No username</h2>
                        )}
                        </div>
                    </div>
                    <div className="stats shadow ml-10">
                        <div className="stat bg-tertiary">
                            <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <div className="stat-title">Number of Characters Created</div>
                            <div className="stat-value text-primary">0</div>
                        </div>
                    </div>
                    <div className="stats shadow ml-10">
                        <div className="stat bg-tertiary">
                            <div className="card-title text-primary">Characters</div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
}