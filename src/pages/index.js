import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import {
  home,
  announcement,
  imageWrapper,
  image,
  date,
  venue,
} from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={home}>
        <div className={imageWrapper}>
          <h1 className={announcement}>We're getting married!</h1>
          <StaticImage
            className={image}
            src="../images/barn.jpg"
            placeholder="blurred"
            alt="barn"
          />
        </div>
        <p>Please join us for our wedding celebration on</p>
        <h1 className={date}>June 11, 2022</h1>
        <h2 className={venue}>Waxham Barn, Norfolk</h2>
      </div>
    </Layout>
  )
}
