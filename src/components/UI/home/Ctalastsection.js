import React from "react"
import { Link } from "gatsby"

export default function Ctalastsection() {
  return (
    <div className="ctalast_section">
      <div className="inner">
        <h2>Get started with Firstbase</h2>
        <p>
          Start, grow, and manage your business. We're with you each step of the
          way.
        </p>
        <div className="_buttons">
          <Link to="/">Start my business</Link>
          <Link to="/">Already incorporated </Link>
        </div>
      </div>
    </div>
  )
}
