import { SignIn } from "@clerk/clerk-react"

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-tertiary">
            <SignIn />
            
        </div>
    )


}