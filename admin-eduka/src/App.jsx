import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./AuthContext"
import PrivateRoute from "./PrivateRoute"
import Login from "./Login"
import Dashboard from "./pages/Dashboard"
import VideoAulas from "./pages/VideoAulas"
import PDFs from "./pages/PDFs"
import Usuarios from "./pages/Usuarios"
import Sidebar from "./components/Sidebar"

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/*"
            element={
              <PrivateRoute>
                <div style={{ display: "flex" }}>
                  <Sidebar />
                  <div style={{ marginLeft: "220px", padding: "20px", width: "100%" }}>
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/videoaulas" element={<VideoAulas />} />
                      <Route path="/pdfs" element={<PDFs />} />
                      <Route path="/usuarios" element={<Usuarios />} />
                    </Routes>
                  </div>
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
