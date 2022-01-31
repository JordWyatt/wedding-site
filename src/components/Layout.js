import React from "react"
import Navbar from "./Navbar"
import { Link } from "gatsby"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Link className="header" to="/">
        <h2>Hollie & Jordan</h2>
      </Link>
      <Navbar />
      <hr style={{ marginBottom: "20px" }} />
      <div className="content">{children}</div>
    </div>
  )
}
