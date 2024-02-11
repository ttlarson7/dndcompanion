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

export const UserContext = createContext()
function App() {
  const [user, setUser] = useState(null)
  
  return (
    <UserContext.Provider value={
      {
        user,
        setUser
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
      </UserContext.Provider>
      
     
    
  )
}

export default App
