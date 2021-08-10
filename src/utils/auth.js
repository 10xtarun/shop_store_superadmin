import { navigate } from "gatsby"

const isBrowser = typeof window !== `undefined`

export const isAuthenticated = () => {
    if (!isBrowser) return
    return localStorage.getItem("isLoggedIn") === "true"
}

export const login = () => {
    if (!isBrowser) return
    return true
}

const setSession = () => {
    //  if error return home
    localStorage.setItem("isLoggedIn", true)
    navigate("/superadmin")
}

export const handleAuthentication = () => {
    console.log("IN HANDLE")
    if (!isBrowser) return
    setSession()
}

export const getProfile = () => {
    return {
        name: "Tarun Singh"
    }
}