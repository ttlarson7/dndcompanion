import { useState, useContext } from 'react'
import './App.css'
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import { SignOutButton, SignInButton, SignedIn, SignedOut, RedirectToSignIn, User } from "@clerk/clerk-react"
import Login from './pages/Login'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Profile from './pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    </>
      
     
    
  )
}

export default App
