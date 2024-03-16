import React, { useContext } from 'react';
import { useUser } from "@clerk/clerk-react"
import Navbars from '../components/Navbars';
import { useState } from "react"
import { CharacterContext } from '../App';
import DeletedCharacters from '../components/DeletedCharacters';
export default function Profile() {
    const user = useUser().user;
    const [newUsername, setNewUsername] = useState('')
    const { numCharacters, setNumCharacters } = useContext(CharacterContext);
    const { characters } = useContext(CharacterContext);
    const { setCharacters } = useContext(CharacterContext);
    const { deletedCharacters } = useContext(CharacterContext);
    const { setDeletedCharacters } = useContext(CharacterContext);
    const getNewUsername = (e) => {
        e.preventDefault();
        setNewUsername(e.target.value)
        console.log(newUsername)
    }
   

    const onRecover = async (character, index) => {
        character.deleted = false;
        setCharacters((prevCharacters) => {
            const newCharacters = [...prevCharacters];
            newCharacters.push(character);
            return newCharacters;
        });
        setDeletedCharacters((prevCharacters) => {
            const newCharacters = [...prevCharacters];
            newCharacters.splice(index, 1);
            return newCharacters;
        });
        const response = await fetch(`/api/character/update?characterId=${character._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                characterName: character.characterName,
                deleted: false,
                characterLevel: character.characterLevel,
                characterClass: character.characterClass,
                characterDescription: character.characterDescription,
                characterAbilities: character.characterAbilities,
                characterItems: character.characterItems,
                characterStats: character.characterStats
            }),
        });
        setCharacters((prevCharacters) => {
            const newCharacters = [...prevCharacters];
            newCharacters[index].deleted = false;
            return newCharacters;
        })
        
    }
    return (
        <div>
            <Navbars page={3} />
            <div className="flex items-center mt-10 flex-col">
                <h1 className="text-5xl">Welcome to your profile, {user.fullName}</h1>
                <div className = "mt-20 flex">
                    <div className="stats shadow ml-10">
                        <div className="stat bg-tertiary">
                           
                            <div className="stat-title">Number of Characters Created</div>
                            <div className="stat-value text-primary">{numCharacters}</div>
                        </div>
                    </div>
                    <div className="stats shadow ml-10">
                        <div className="stat bg-tertiary">
                            <div className="card-title text-primary">Deleted Characters</div>
                            <div className="flex flex-col items-center">
                                {deletedCharacters.map((character, index) => {
                                    return (
                                        <DeletedCharacters character={character} onRecover={onRecover} index={index}  key={index} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
}