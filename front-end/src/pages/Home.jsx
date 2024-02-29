import React from 'react';
import Navbars from '../components/Navbars';
import { useUser } from "@clerk/clerk-react"
import { useState } from "react"
import { useContext } from 'react';
import { CharacterContext } from '../App';
import CharacterCard from '../components/CharacterCard';
export default function Home() {
    const [user, setUser] = useState(useUser().user)
    const { characters } = useContext(CharacterContext);
    return (
        <div>
            <Navbars page={2} />
            <div className="flex items-center mt-10 flex-col">
                    {characters.map((character, index) => (
                <CharacterCard character={character} index={index} key={index} />
                ))}
            </div>
        </div>
    );
}