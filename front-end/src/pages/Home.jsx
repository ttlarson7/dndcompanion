import React from 'react';
import Navbars from '../components/Navbars';
import { useUser } from "@clerk/clerk-react"
import { useState } from "react"
import { useContext } from 'react';
import { useEffect } from 'react';
import { CharacterContext } from '../App';
import CharacterCard from '../components/CharacterCard';
export default function Home() {
    const [user, setUser] = useState(useUser().user)
    const { characters } = useContext(CharacterContext);
    const [hasCharacters, setHasCharacters] = useState(characters.length > 0);
    useEffect(() => {
        setHasCharacters(characters.length > 0);
        console.log(characters)
    }, [characters])
    return (
        <div>
            <Navbars page={2} />
            <div className="flex justify-center mt-10 flex-wrap">
            {hasCharacters && characters.map((character, index) => (
                    <CharacterCard character={character} index={index} key={index} />
                ))}
            </div>
        </div>
    );
}