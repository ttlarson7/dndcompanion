import { Link } from "react-router-dom"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
import { useUser } from "@clerk/clerk-react"
import { useState } from "react"
import { CharacterContext } from "../App"
import { useContext } from "react"
export default function LandingNav({ page }) {
    
    const setNumCharacters = useContext(CharacterContext).setNumCharacters;

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

    if (page === 2) {
        return (
            <div className="sticky top-0 z-50">
                <div className="flex w-full h-16 bg-primary glass items-center justify-between">
                    <div className="flex">
                    <Link to="/" className="btn btn-active btn-ghost ml-5 text-tertiary">Character Cove</Link>
                    </div>
                    <div className="mr-5">
                        <div className="flex items-center">
                            <button className="btn btn-outline btn-tertiary bg-black mr-5"onClick={()=>document.getElementById(`my_modal`).showModal()}>Create Character</button>
                            <dialog id={`my_modal`} className="modal">
                        <div className="modal-box max-w-screen-lg w-full flex flex-col">
                            <input className="font-bold text-5xl text-center self-center bg-transparent rounded " type="text" placeholder="Name" onChange={(e) => setCharacterName(e.target.value)}></input>
                            <div className="m-5 self-center">
                            <label className="text-3xl self-center mt-4">Class:</label>
                            <input className="text-3xl text-center bg-transparent rounded" type="text" onChange={(e) => setCharacterClass(e.target.value)}></input>
                            </div>
                            <div className="m-5 self-center">
                            <label className="text-3xl self-center mt-4">Level:</label>
                            <input className="text-3xl text-center bg-transparent rounded" type="text" onChange={(e) => setCharacterLevel(e.target.value)}></input>
                            </div>
                            <h1 className="py-4 self-center mt-4 text-3xl">Stats</h1>
                            <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

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
                        <button className="btn">
                            Save
                        </button>
                        </form>
                        </div>
                    </div>
                    </dialog>
                        <Link to="/profile" className="btn btn-outline btn-tertiary bg-black mr-5">Profile</Link>
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
                        <Link to="/" className="btn btn-outline btn-tertiary bg-black mr-5">Home</Link>
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