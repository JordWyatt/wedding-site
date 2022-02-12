import React from "react"
import Layout from "../components/Layout"

export default function Details() {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <div className="row">
          <h3>📍 Where? 📍</h3>
          <p>
            Waxham Great Barn, Coast Road, Waxham, Norfolk, NR12 0DZ.{" "}
            <a href="https://goo.gl/maps/MGSQoTf3ywewanKh9">
              See it on Google Maps
            </a>
          </p>
        </div>
        <div className="row">
          <h3>🗓 When? 🗓</h3>
          <p>11th June 2022.</p>
          <p>Ceremony at 2pm (arrive from 1:30pm), Reception from 7pm</p>
        </div>
        <div className="row">
          <h3>🍟 Will there be food? 🐟</h3>
          <p>
            There will be food at both the ceremony and the reception. We'll
            reach out regarding dietary requirements nearer the time.
          </p>
        </div>
        <div className="row">
          <h3>🎁 Can I bring a gift? 🎁</h3>
          <p>
            We do not expect gifts, and please do not feel you have to, but if
            you would like to please either:
          </p>
          <p>
            <ul>
              <li>
                Make a donation to one of the following charities:
                <ul style={{ paddingBottom: "10px" }}>
                  <li>
                    <a href="https://www.priscillabaconhospice.org.uk/donate/">
                      Priscilla Bacon Hospice
                    </a>
                  </li>
                  <li>
                    <a href="https://www.eaaa.org.uk/support-us/make-a-donation/donate/step/1/single">
                      East Anglian Air Ambulance
                    </a>
                  </li>
                  <li>
                    <a href="https://donation.macmillan.org.uk/">
                      Macmillan Cancer Support
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                Contribute to something we'd like to treat ourselves to:{" "}
                <a href="https://prezola.com/wishlists/10249166/">
                  https://prezola.com/wishlists/10249166/
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </Layout>
  )
}
