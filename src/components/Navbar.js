import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <Link to="/details">Details</Link>
      <Link to="/travel">Travel & Accomodation</Link>
      <Link to="/venue">Venue</Link>
      <a href="https://forms.gle/DQDEU2mwNpGYmU2MA">RSVP</a>
    </nav>
  )
}
