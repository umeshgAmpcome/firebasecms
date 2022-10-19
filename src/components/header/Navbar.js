import { Link } from "gatsby"
import React from "react"
// import { AiOutlineDown } from "react-icons/Ai"

export default function Navbar() {
  return (
    <nav>
      <div className="banner">
        Firebase Live: Q&A.
        <a href="https://calendly.com/communityfirstbaseio/firstbase-live-qa">
          Register Now
        </a>
      </div>
      <div className="links">
        <div className="image">
          <Link to="/" className="logo">
            <img
              src="https://assets.website-files.com/609486d2fafa37698a57db5b/609bf4ae6380ac34e545f653_firstbase-logo.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="nav_links">
          <Link to="/"></Link>
          <Link to="/products">Products</Link>
          <Link to="/company">Company</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/rewards">Rewards</Link>
          <Link to="/partners">Partners</Link>
          <Link to="/resources">Resources</Link>
        </div>
        <div className="nav_signin">
          <Link to="/">Sign in</Link>
          <Link to="/">Start my business</Link>
        </div>
      </div>
    </nav>
  )
}
