import { Link } from "react-router-dom"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { useUser } from "@clerk/clerk-react"
import { useState } from "react"
import { CharacterContext } from "../App"
import { useContext } from "react"

export default function LandingNav({ page }) {
    
    const setNumCharacters = useContext(CharacterContext).setNumCharacters;
    const numCharacters = useContext(CharacterContext).numCharacters;
    const { setCharacters } = useContext(CharacterContext);
    const { setDeletedCharacters } = useContext(CharacterContext);
    const user = useUser().user;
    const getUser = async () => {
        try {
            const userId = user.id;
            const response = await fetch(`/api/user/get?userId=${userId}`, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
                .then(data => {
                    setNumCharacters(data.numCharacters);
                }); 
            
        } catch (error) {
            console.error('Error:', error);
        }

        try {
            const userId = user.id;
            const response = await fetch(`/api/character/get?userId=${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId,
                }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json()
                .then(data => {
                    setCharacters(data);
                    setDeletedCharacters(data.filter(character => character.deleted === true));
                });
            
        } catch (error) {
            console.error('Error:', error);
        }
        
    }
    
    if (page === 1) {
        return (
            <div className="sticky top-0 z-50">
                <div className="flex w-full h-16 bg-primary glass items-center justify-between">
                    <div className="flex">
                    <Link to="/" className="btn btn-active btn-ghost ml-5 text-tertiary">Character Cove</Link>
                        <SignedIn>
                            <div className="ml-5">
                                <Link to="/home" className="btn btn-outline btn-tertiary bg-black" onClick={getUser}>Get Started</Link>
                            </div>
                        </SignedIn>
                    </div>
                    <div className="mr-5">
                        <SignedOut>
                            <Link to="/login" className="btn btn-outline btn-warning text-white mr-5">Sign In</Link>
                        </SignedOut>
                        <div className="flex items-center">
                        
                            <SignedIn>
                            <Link to="/profile" className="btn btn-outline btn-tertiary bg-black mr-5">Profile</Link>
                            <UserButton />
                        </SignedIn>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const [characterName, setCharacterName] = useState("");
    const [characterClass, setCharacterClass] = useState("");
    const [characterLevel, setCharacterLevel] = useState(1);
    const [characterDescription, setCharacterDescription] = useState("");
    const [characterAbilities, setCharacterAbilities] = useState("");
    const [characterItems, setCharacterItems] = useState("");
    const [stats, setStats] = useState([10, 10, 10, 10, 10, 10]);

    const changeStats = (index, value) => {
        setStats(prevStats => {
            const updatedStats = [...prevStats];
            updatedStats[index] = value;
            return updatedStats;
        });
    };

    const createCharacter = async () => {
        console.log(stats)
        if (characterName === "" || characterClass === "" || characterLevel === 0 || characterDescription === "" || characterAbilities === "" || characterItems === "") {
            window.alert('Make sure to fill in all elements!');
            return;  
        }
        
        try {
            const response = await fetch('/api/character/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user.id,
                    deleted: false,
                    characterName: characterName,
                    characterClass: characterClass,
                    characterLevel: characterLevel,
                    characterDescription: characterDescription,
                    characterAbilities: characterAbilities,
                    characterItems: characterItems,
                    characterStats: stats,
                }),
            });
        } catch (error){
            console.error(error);
        }
        try {
            const response = await fetch(`/api/user/update/numCharacters`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userId: user.id,
                    numCharacters: numCharacters + 1,
                }),
            });
            
        } catch (error) {
            console.error('Error:', error);
        }
        
        setNumCharacters(numCharacters + 1);
        setCharacters(prevCharacters => {
            const updatedCharacters = [...prevCharacters];
            updatedCharacters.push({
                userId: user.id,
                deleted: false,
                characterName: characterName,
                characterClass: characterClass,
                characterLevel: characterLevel,
                characterDescription: characterDescription,
                characterAbilities: characterAbilities,
                characterItems: characterItems,
                characterStats: stats,
            });
            return updatedCharacters;
        });

        



    };

    const [diceRoll, setDiceRoll] = useState(0);
    const [diceSize, setDiceSize] = useState(20);
    

   

    const rollDice = () => {
        const ws = new WebSocket('ws://localhost:8080'); 

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
      const message = JSON.stringify({ action: 'roll_dice', dice: diceSize });
      ws.send(message);
    };

    ws.onmessage = (event) => {
      // Received a message from the server
      const data = JSON.parse(event.data);
      setDiceRoll(data.number);
        console.log('Received dice roll:', data.number);
      ws.close();
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error.message);
    };

    ws.onclose = () => {
      // WebSocket connection closed
      console.log('WebSocket connection closed');
    };
  };

    if (page === 2) {
        return (
            <div className="sticky top-0 z-50">
                <div className="flex w-full h-16 bg-primary glass items-center justify-between">
                    <div className="flex">
                    <Link to="/" className="btn btn-active btn-ghost ml-5 text-tertiary">Character Cove</Link>
                    </div>
                    <div className="flex items-center">
                        <button className="btn btn-outline btn-tertiary glass text-black" onClick={rollDice}>Roll Dice</button>
                        <input type="number" className="input input-bordered ml-5 w-20" placeholder="d20" min="1" onChange={(e)=>setDiceSize(e.target.value)}></input>
                        <h3 className="ml-5 text-black">Roll: {diceRoll}</h3>
                    </div>
                    <div className="mr-5">
                        <div className="flex items-center">
                            <button className="btn btn-outline btn-tertiary bg-black mr-5"onClick={()=>document.getElementById(`my_modal`).showModal()}>Create Character</button>
                            <dialog id={`my_modal`} className="modal">
                        <div className="modal-box max-w-screen-lg w-full flex flex-col">
                            <input className="font-bold text-5xl text-center self-center bg-transparent rounded " type="text" placeholder="Name" onChange={(e) => setCharacterName(e.target.value)}></input>
                            <div className="m-5 self-center">
                            <label className="text-3xl self-center mt-4">Class:</label>
                            <input className="text-3xl text-center bg-transparent rounded" type="text" onChange={(e) => setCharacterClass(e.target.value)} placeholder="Input Class"></input>
                            </div>
                            <div className="m-5 self-center">
                            <label className="text-3xl self-center mt-4">Level:</label>
                            <input className="text-3xl text-center bg-transparent rounded" type="text" onChange={(e) => setCharacterLevel(e.target.value)} placeholder="Input Level"></input>
                            </div>
                            <h1 className="py-4 self-center mt-4 text-3xl">Stats</h1>
                            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                                    <div className="flex justify-center">
                                        <input type="number" className="input input-bordered text-3xl w-28" placeholder="STR" onChange={(e) => changeStats(0, e.target.value)} />
                                        <input type="number" className="input input-bordered text-3xl w-28" placeholder="DEX" onChange={(e) => changeStats(1, e.target.value)} />
                                        <input type="number" className="input input-bordered text-3xl w-28" placeholder="CON" onChange={(e) => changeStats(2, e.target.value)} />
                                        <input type="number" className="input input-bordered text-3xl w-28" placeholder="INT" onChange={(e) => changeStats(3, e.target.value)} />
                                        <input type="number" className="input input-bordered text-3xl w-28" placeholder="WIS" onChange={(e) => changeStats(4, e.target.value)} />
                                        <input type="number" className="input input-bordered text-3xl w-28" placeholder="CHA" onChange={(e) => changeStats(5, e.target.value)} />
                                        </div>

                            <h1 className="py-4 self-center mt-4 text-3xl">Description</h1>
                            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
                            <textarea className="textarea textarea-bordered text-lg min-h-40 resize-y" placeholder="Description" onChange={(e) => setCharacterDescription(e.target.value)}></textarea>
                            
                            <h1 className="py-4 self-center mt-4 text-3xl">Abilites</h1>
                            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
                            <textarea className="textarea textarea-bordered text-lg min-h-40 resize-y"  placeholder="Abilities" onChange={(e) => setCharacterAbilities(e.target.value)}></textarea>
                            
                            <h1 className="py-4 self-center mt-4 text-3xl">Items</h1>
                            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
                            <textarea className="textarea textarea-bordered text-lg min-h-40 resize-y" placeholder="Items" onChange={(e) => setCharacterItems(e.target.value)}></textarea>
                            
                        <div className="modal-action">
                        <form method="dialog">
                        <button className="btn" onClick={createCharacter}>
                            Save
                        </button>
                        </form>
                        </div>
                    </div>
                    </dialog>
                            <Link to="/profile" className="btn btn-outline btn-tertiary bg-black mr-5">Profile</Link>
                            <Link to="/help" className="btn btn-outline btn-tertiary bg-black mr-5 rounded-full">?</Link>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
    if (page === 3) {
        return (
            <div className="sticky top-0 z-50">
                <div className="flex w-full h-16 bg-primary glass items-center justify-between">
                    <div className="flex">
                        <Link to="/" className="btn btn-active btn-ghost ml-5 text-tertiary">Character Cove</Link>
                    </div>
                    <div className="mr-5">
                        <div className="flex items-center">
                        <Link to="/home" className="btn btn-outline btn-tertiary bg-black mr-5">Home</Link>
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