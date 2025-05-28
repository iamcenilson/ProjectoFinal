import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  function login(username, password) {
    // Aqui você coloca sua validação real
    if (username === "admin" && password === "admin") {
      setUser({ username: "admin" })
      navigate("/dashboard")
      return true
    }
    return false
  }

  function logout() {
    setUser(null)
    navigate("/login")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
