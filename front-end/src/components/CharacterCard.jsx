import React from 'react';
import { useState, useContext } from 'react';
import { CharacterContext } from '../App';


export default function CharacterCard({ character, index } ) {
    const [modalOpen, setModalOpen] = useState(false)
    const [editedDescription, setEditedDescription] = useState(character.characterDescription);
    const [editedAbilities, setEditedAbilities] = useState(character.characterAbilities);
    const [editedItems, setEditedItems] = useState(character.characterItems);
    const [editedStats, setEditedStats] = useState(character.characterStats);
    const [editedLevel, setEditedLevel] = useState(character.characterLevel);
    const [editedClass, setEditedClass] = useState(character.characterClass);
    const [editedName, setEditedName] = useState(character.characterName);
    const { updateCharacterDescription } = useContext(CharacterContext);
    const { updateCharacterAbilities } = useContext(CharacterContext);
    const { updateCharacterItems } = useContext(CharacterContext);
    const { updateCharacterStats } = useContext(CharacterContext);
    const { updateCharacterLevel } = useContext(CharacterContext);
    const { updateCharacterClass } = useContext(CharacterContext);
    const { updateCharacterName } = useContext(CharacterContext);
    const { numCharacters } = useContext(CharacterContext);
    const { setDeletedCharacters } = useContext(CharacterContext);
    const { setCharacters } = useContext(CharacterContext);
    if (character.deleted == true) {
        return null;
    }
    const changeStats = (index, value) => {
        setEditedStats(prevStats => {
            const updatedStats = [...prevStats];
            updatedStats[index] = value;
            return updatedStats;
        });
    };

    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }
    const [deleted, setDeleted] = useState(false);
    const handleDelete = async () => {
        character.deleted = true;
        setDeletedCharacters((prevCharacters) => {
            const newCharacters = [...prevCharacters];
            newCharacters.push(character);
            return newCharacters;
        });
        setCharacters((prevCharacters) => {
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
                characterName: editedName,
                deleted: true,
                characterLevel: editedLevel,
                characterClass: editedClass,
                characterDescription: editedDescription,
                characterAbilities: editedAbilities,
                characterItems: editedItems,
                characterStats: editedStats
            }),
            }
        );
        setDeleted(true);
    }
    const handleSave = () => {
        updateCharacterDescription(index, editedDescription);
        updateCharacterAbilities(index, editedAbilities);
        updateCharacterItems(index, editedItems);
        updateCharacterStats(index, editedStats);
        updateCharacterLevel(index, editedLevel);
        updateCharacterClass(index, editedClass);
        updateCharacterName(index, editedName);
        console.log(character._id)
        const response = fetch(`/api/character/update?characterId=${character._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                characterName: editedName,
                characterLevel: editedLevel,
                characterClass: editedClass,
                characterDescription: editedDescription,
                characterAbilities: editedAbilities,
                characterItems: editedItems,
                characterStats: editedStats
            }),
            }
    );
        closeModal();
      };

    if (character.deleted == true) {
        return null;
    }
    else {
        return (
        
            <div className="card w-96 bg-muted m-5 shadow-xl">
            <div className="card-body">
            <h2 className="card-title">{editedName} </h2>
                    <p>{character.characterClass}</p>
                    
                    <div className="card-actions justify-between mt-5">
                        <button className="btn btn-error" onClick={handleDelete}>Delete</button>
                        <button className="btn btn-primary" onClick={()=>document.getElementById(`my_modal_${index}`).showModal()}>Use</button>
                        <dialog id={`my_modal_${index}`} className="modal" open={modalOpen}>
                            <div className="modal-box max-w-screen-lg w-full flex flex-col">
                                <input className="font-bold text-5xl text-center self-center bg-transparent rounded " type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)}></input>
                                <div className="m-5 self-center">
                                <label className="text-3xl self-center mt-4">Class:</label>
                                <input className="text-3xl text-center bg-transparent rounded" type="text" value={editedClass} onChange={(e) => setEditedClass(e.target.value)}></input>
                                </div>
                                <div className="m-5 self-center">
                                <label className="text-3xl self-center mt-4">Level:</label>
                                <input className="text-3xl text-center bg-transparent rounded" type="text" value={editedLevel} onChange={(e) => setEditedLevel(e.target.value)}></input>
                                </div>
                                <h1 className="py-4 self-center mt-4 text-3xl">Stats</h1>
                                <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                                <div className="flex justify-center">
                                    <input type="number" className="input input-bordered text-3xl w-28" placeholder="STR" onChange={(e) => changeStats(0, e.target.value)} value={editedStats[0]} />
                                        <input type="number" className="input input-bordered text-3xl w-28" placeholder="DEX" onChange={(e) => changeStats(1, e.target.value)} value={editedStats[1]} />
                                        <input type="number" className="input input-bordered text-3xl w-28" placeholder="CON" onChange={(e) => changeStats(2, e.target.value)} value={editedStats[2]} />
                                        <input type="number" className="input input-bordered text-3xl w-28" placeholder="INT" onChange={(e) => changeStats(3, e.target.value)} value={editedStats[3]} />
                                        <input type="number" className="input input-bordered text-3xl w-28" placeholder="WIS" onChange={(e) => changeStats(4, e.target.value)} value={editedStats[4]} />
                                        <input type="number" className="input input-bordered text-3xl w-28" placeholder="CHA" onChange={(e) => changeStats(5, e.target.value)} value={editedStats[5]} />
                                </div>
    
                                <h1 className="py-4 self-center mt-4 text-3xl">Description</h1>
                                <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
                                <textarea className="textarea textarea-bordered text-lg min-h-40 resize-y" value={editedDescription} placeholder="Description" onChange={(e) => setEditedDescription(e.target.value)}></textarea>
                                
                                <h1 className="py-4 self-center mt-4 text-3xl">Abilites</h1>
                                <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
                                <textarea className="textarea textarea-bordered text-lg min-h-40 resize-y" value={editedAbilities} placeholder="Abilities" onChange={(e) => setEditedAbilities(e.target.value)}></textarea>
                                
                                <h1 className="py-4 self-center mt-4 text-3xl">Items</h1>
                                <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
                                <textarea className="textarea textarea-bordered text-lg min-h-40 resize-y" value={editedItems} placeholder="Items" onChange={(e) => setEditedItems(e.target.value)}></textarea>
                                
                            <div className="modal-action">
                                    <form method="dialog">
                                    <button className="btn" onClick={handleSave}>
                                Save
                            </button>
                            </form>
                            </div>
                        </div>
                        </dialog>
            </div>
        </div>
        </div>
        )
    }
    
    

}