"use client"
import { signIn, signOut, useSession } from "next-auth/react"

// this useSession hoke we can use for client side components to get info about the user.

export const Appbar = () => {
    const session = useSession() ;
    return <div>
        <button onClick={() => {
            signIn()
        }}>Signin</button>
        <button onClick={() => {
            signOut()
        }}>LogOut</button>
        {JSON.stringify(session)}
    </div>
}