import React from "react"
import { Navbar } from "../navbar/Navbar"

export const AppShell = ({ children }: { children: React.ReactNode | any }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}