import * as React from "react"
import Footer from "./footer/Footer"
import Navbar from "./header/Navbar"
import "../styles/main.scss"
// import Homehero from "./UI/home/homehero"
// import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
