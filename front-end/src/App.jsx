import { useState, createContext } from 'react'
import './App.css'
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import { SignOutButton, SignInButton, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react"
import Login from './pages/Login'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Profile from './pages/Profile'

export const CharacterContext = createContext()

function App() {

  const [characters, setCharacters] = useState([{characterName: "Billy", characterClass: "fighter", characterLevel: 1, stats: [10,10,10,10,10,10], characterDescription:"He is billbBob", characterAbilities:"Billy can do billy things", characterItems:"Earth"}, {characterName: "Steve", characterClass: "fighter", characterLevel: 1, stats: [10,10,10,10,10,10], characterDescription:"He is billy", characterAbilities:"Billy can do billy things", characterItems:"Earth"}])
  const [user, setUser] = useState(null)
  const [numCharacters, setNumCharacters] = useState(0)
  const updateCharacterDescription = (index, newDescription) => {
    setCharacters(prevCharacters => {
      const updatedCharacters = [...prevCharacters];
      updatedCharacters[index].characterDescription = newDescription;
      return updatedCharacters;
    });
  };
  const updateCharacterAbilities = (index, newAbilities) => {
    setCharacters(prevCharacters => {
      const updatedCharacters = [...prevCharacters];
      updatedCharacters[index].characterAbilities = newAbilities;
      return updatedCharacters;
    });
  }
  const updateCharacterItems = (index, newItems) => {
    setCharacters(prevCharacters => {
      const updatedCharacters = [...prevCharacters];
      updatedCharacters[index].characterItems = newItems;
      return updatedCharacters;
    });
  }
  const updateCharacterStats = (index, newStats) => {
    setCharacters(prevCharacters => {
      const updatedCharacters = [...prevCharacters];
      updatedCharacters[index].stats = newStats;
      return updatedCharacters;
    });
  }
  const updateCharacterLevel = (index, newLevel) => {
    setCharacters(prevCharacters => {
      const updatedCharacters = [...prevCharacters];
      updatedCharacters[index].characterLevel = newLevel;
      return updatedCharacters;
    });
  }
  const updateCharacterClass = (index, newClass) => {
    setCharacters(prevCharacters => {
      const updatedCharacters = [...prevCharacters];
      updatedCharacters[index].characterClass = newClass;
      return updatedCharacters;
    });
  }
  const updateCharacterName = (index, newName) => {
    setCharacters(prevCharacters => {
      const updatedCharacters = [...prevCharacters];
      updatedCharacters[index].characterName = newName;
      return updatedCharacters;
    });
  }

  return (
    <CharacterContext.Provider value={
      {
        characters,
        setCharacters, 
        updateCharacterDescription,
        updateCharacterAbilities,
        updateCharacterItems,
        updateCharacterStats,
        updateCharacterLevel,
        updateCharacterClass,
        updateCharacterName,
        numCharacters,
        setNumCharacters,
      }
    
    }>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
            path="/home"
            element={
              <>
                <SignedIn>
                  <Home />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
        />
        <Route
            path="/profile"
            element={
              <>
                <SignedIn>
                  <Profile />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
      </Routes>
      </CharacterContext.Provider>
      
     
    
  )
}

export default App
