import React from "react"
import Hero from "../../Hero/Hero"

export default function Homehero({
  heading,
  subHead,
  styleButton,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
}) {
  return (
    <div className="hero_section">
      <Hero
        className="hero"
        heading={heading}
        subHead={subHead}
        styleButton={styleButton}
      />
      <div className="hero_status">
        <div className="hero_status_data">
          <h5>15226</h5>
          <p>companies</p>
        </div>
        <div className="bar"></div>
        <div className="hero_status_data">
          <h5>Trustpilot</h5>
          <p>480+ reviews</p>
        </div>
        <div className="bar"></div>
        <div className="hero_status_data">
          <h5>187</h5>
          <p>countries</p>
        </div>
      </div>
      <video
        className="container_video"
        autoPlay
        loop
        src="https://assets.website-files.com/609486d2fafa37698a57db5b/628d5e7d4d650e8461de6c7c_CleanShot%202022-05-24%20at%20153116-transcode.mp4"
      >
        <track kind="captions" />
      </video>
      <div className="companies">
        <p>TRUSTED BY THE WORLD’S MOST INNOVATIVE COMPANIES</p>
        <div className="trusted">
          <img src={logo1.url} alt="logo" />
          <img src={logo2.url} alt="logo" />
          <img src={logo3.url} alt="logo" />
          <img src={logo4.url} alt="logo" />
          <img src={logo5.url} alt="logo" />
        </div>
      </div>
    </div>
  )
}
