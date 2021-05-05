import React from "react"
import Layout from "../components/Layout"
import { url } from "../styles/venue.module.css"
export default function Venue() {
  return (
    <Layout>
      <h1>Venue</h1>
      <p>The ceremony and reception will be held at Waxham Barn:</p>
      <p>Waxham Great Barn, Coast Road, Waxham, Norfolk, NR12 0DZ</p>
      <p>
        Directions to the venue can be found on{" "}
        <a className={url} href="https://goo.gl/maps/MGSQoTf3ywewanKh9">
          Google Maps
        </a>
      </p>
    </Layout>
  )
}
