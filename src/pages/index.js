import React from "react"
import Layout from "../components/Layout"
import {
  home,
  announcement,
  imageWrapper,
  image,
  date,
} from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={home}>
        <div className={imageWrapper}>
          <h1 className={announcement}>We're getting married!</h1>
          <img className={image} src="/barn.jpg" />
        </div>
        <p>Please join us for our wedding celebration on</p>
        <h1 className={date}>June 11, 2022</h1>
        <h2>Waxham Barn</h2>
      </div>
    </Layout>
  )
}
