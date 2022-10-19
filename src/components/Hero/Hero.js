import React from "react"
import { Link } from "gatsby"

export default function Hero({ heading, subHead, styleButton }) {
  return (
    <div className="hero">
      <h1>Start {heading}</h1>
      <p>{subHead}</p>
      <div className="_buttons">
        <Link to="/">{styleButton} </Link>
        <Link to="/">Already incorporated?</Link>
      </div>
    </div>
  )
}
