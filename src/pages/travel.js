import React from "react"
import Layout from "../components/Layout"

export default function Travel() {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <div className="row">
          <h3>Travel</h3>
          <p>
            For ceremony guests, a coach will be organised from Norwich to the
            venue.
          </p>
          <p>
            For those making their own way, we'd recommend either driving or
            getting a taxi (sorry it's a trek 😅). There is parking at the
            venue, and you're able to leave your car overnight if you wish.
          </p>
        </div>
        <div className="row">
          <h3>Accomodation</h3>
          <p>
            {" "}
            We'd recommend those travelling down from the event to stay in
            Norwich if you're not driving as accomodation near the venue is hard
            to find and fairly remote. There are lots of reasonably priced
            Airbnbs in Norwich, and it's a nice place to visit for the weekend.{" "}
            If anyone unfamiliar with the area wants any recommendations or
            advice please reach out to one of us.
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
