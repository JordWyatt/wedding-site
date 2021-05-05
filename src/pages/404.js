import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function NotFound() {
  return (
    <Layout>
      <div>
        <h1>Whoops...</h1>
        <h2>You shouldn't be here.</h2>
        <h2>
          <Link to="/">Go home.</Link>
        </h2>
      </div>
    </Layout>
  )
}
