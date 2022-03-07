import React from "react"
import Layout from "../components/Layout"

export default function Details() {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <div className="row">
          <h3>📍 Where? 📍</h3>
          <p>
            Waxham Great Barn, Coast Road, Waxham, Norfolk, NR12 0DZ. <br />
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
            There will be food at both the ceremony and the reception. Please
            let us know of any dietary requirements when you RSVP.
          </p>
        </div>
        <div className="row">
          <h3>🎁 Can I bring a gift? 🎁</h3>
          <p>
            We do not expect gifts, and please do not feel you have to, but if
            you would like to please either donate to charity or towards our
            honeymoon fund here (please scroll down all the way to see all
            options):
            <br />
            <a href="https://prezola.com/wishlists/10249166/">
              https://prezola.com/wishlists/10249166/
            </a>
            <br />
            <br />
            Charity donations will go to us, but we will forward them to the
            charities after the wedding.
          </p>
        </div>
      </div>
    </Layout>
  )
}
