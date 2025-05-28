import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Video,
  FileText,
  Users,
} from "lucide-react"
import "./Sidebar.css"

export default function Sidebar() {
  const location = useLocation()

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { path: "/videoaulas", label: "Vídeo-aulas", icon: <Video size={18} /> },
    { path: "/pdfs", label: "PDFs", icon: <FileText size={18} /> },
    { path: "/usuarios", label: "Usuários", icon: <Users size={18} /> },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Eduka Admin</h2>
      <nav className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${isActive(item.path) ? "active" : ""}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
