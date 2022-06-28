import { createContext, useContext, useState } from "react";

const Context = createContext({})

export const PageProvider = ({ children }) => {
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const handleLoginOpen = (isOpen) => {
        setIsLoginOpen(isOpen)
        console.log(isLoginOpen);
    }
    
    return <Context.Provider value={{isLoginOpen, handleLoginOpen }}>{children}</Context.Provider>
}

export const PageAuth = () => useContext(Context)







