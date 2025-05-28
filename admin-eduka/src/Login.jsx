import { useState } from "react"
import { useAuth } from "./AuthContext"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()
    const success = login(username, password)
    if (!success) {
      setError("Usuário ou senha inválidos.")
    }
  }

  return (
    <div className="login-container">
      <h2>Login Admin Eduka</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Usuário:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}
