import React from "react"
import Layout from "../components/Layout"

export default function Rsvp() {
  return (
    <Layout>
      RSVP{" "}
      <div width="100%" height="100%">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfK6dce0G-MFylTcBzZRGqRB0a53sCUf7GcBFieT7lqJkiECg/viewform?embedded=true"
          width="80%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </Layout>
  )
}
