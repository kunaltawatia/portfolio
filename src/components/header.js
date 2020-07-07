import React from "react"
import "../styles/header.css"
import { Link } from "gatsby"

function Header({ location }) {
  const links = [
    {
      id: "1",
      path: "/",
      name: "about",
    },
    {
      id: "2",
      path: "/work",
      name: "work",
    },
  ]
  return (
    <div className="header">
      <div className="links">
        {links.map(link => (
          <Link to={link.path} key={link.id} className={link.path === location.pathname ? "underline" : ""}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header
