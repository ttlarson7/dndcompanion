import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { CharacterContext } from "../App";

export default function DeletedCharacters({ character, onRecover, index }) {
     
    if (character.deleted === false) {
        return null;
    }

    const handleRecover= () => {
        const reponse = onRecover(character, index);
    }
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="m-5">{character.characterName}</p>
                <p className="m-5">{character.characterClass}</p>
                <p className="m-5">{character.characterLevel}</p>
                <button className="btn btn-success" onClick={handleRecover}>Recover</button>
            </div>
        </div>
    )
}