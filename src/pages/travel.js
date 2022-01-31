import React from "react"
import Layout from "../components/Layout"

export default function Travel() {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <div className="row">
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
        </div>
        <h3>Local Taxi Companies</h3>
        <div className="row" style={{ display: "flex", flexDirection: "row" }}>
          <div className="taxiList">
            <p>
              <h4>Norwich</h4>
              <ul>
                <li>
                  <a href="https://www.abctaxisnorwich.co.uk/">
                    ABC (01603 666333)
                  </a>
                </li>
                <li>
                  <a href="https://goldstartaxis.org/">
                    Goldstar (01603 700700)
                  </a>
                </li>
                <li>
                  <a href="https://www.courtesytaxis.com/">
                    Courtesy (01603 446644)
                  </a>
                </li>
              </ul>
            </p>
          </div>
          <div className="taxiList">
            <p>
              <h4>Waxham</h4>
              <ul>
                <li>
                  <a href="https://www.stripesexpress.com/">
                    Stripes Express (01603 666333)
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
