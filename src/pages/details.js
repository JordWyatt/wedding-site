import React from "react"
import Layout from "../components/Layout"

export default function Details() {
  return (
    <Layout>
      <div>
        <h3>📍 Where? 📍</h3>
        <p>Waxham Great Barn, Coast Road, Waxham, Norfolk, NR12 0DZ</p>
        <h3>🗓 When? 🗓</h3>
        <p>11th June 2022. Ceremony @ 2pm, Reception from 7pm</p>
        <h3>🍟 Will there be food? 🐟</h3>
        <p>There will be food at both the ceremony and the reception</p>
        <h3>🎁 Can I bring a gift? 🎁</h3>
        <p>
          We do not expect gifts, and please do not feel you have to, but if you
          would like to please either:
        </p>
        <ul>
          <li>Make a donation to one of the following charities:</li>
          <ul>
            <li>one</li>
            <li>two</li>
          </ul>
          <li>
            Contribute to something we'd like to treat ourselves to here:
            <a href="https://prezola.com/wishlists/10249166/">
              https://prezola.com/wishlists/10249166/
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
