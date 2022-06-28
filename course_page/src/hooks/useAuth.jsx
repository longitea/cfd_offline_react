import { createContext, useContext, useState } from "react"

const AuthContext = createContext({ a: 100 })

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const onLogin = () => {
        setUser({
            name: 'Thanh Long',
            avatar: 'https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png'
        })
    }

    const onLogout = () => {
        setUser()
    }

    return <AuthContext.Provider value={{ user, onLogin, onLogout }}>{children}</AuthContext.Provider>
}

// cho tiện sau này đổi tên
export const useAuth = () => useContext(AuthContext)