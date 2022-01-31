import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <Link to="/details" style={{ marginLeft: "0px" }}>
        Details
      </Link>
      <Link to="/travel">Travel & Accomodation</Link>
      <a href="https://forms.gle/DQDEU2mwNpGYmU2MA">RSVP</a>
    </nav>
  )
}
