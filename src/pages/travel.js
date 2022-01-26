import React from "react"
import Layout from "../components/Layout"

export default function Travel() {
  return (
    <div>
      <Layout>
        <div className="travel">
          <h3>Travel to the venue</h3>
          <p>
            {" "}
            For travel to the venue for ceremony guests, a coach will be
            organised nearer the time for those located in and around Norwich.{" "}
          </p>
          <p>
            For those making their own way, we'd recommend either driving or
            getting a taxi (sorry it's a trek 😅). There is parking at the
            venue, and you're able to leave your car overnight if you wish.
          </p>
          <h3>Local Taxi Companies</h3>
          <ul>
            <li>Norwich</li>
            <ul>
              <li>ABC</li>
              <li>foo</li>
              <li>bar</li>
            </ul>
            <li>Waxham</li>
            <ul>
              <li>foo</li>
              <li>bar</li>
            </ul>
          </ul>
        </div>
      </Layout>
    </div>
  )
}
