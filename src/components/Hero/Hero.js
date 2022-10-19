import React from "react"
import { Link } from "gatsby"

// <img src={logo1.url} alt="" />
export default function Hero({
  pageId,
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
      <div className="section_container">
        <a
          className="transparent"
          href="https://calendly.com/communityfirstbaseio/firstbase-live-qa?month=2022-10"
        >
          We're LIVE on <span> product hunt</span>!🎉 | join the party
        </a>
        <div className="block">
          <div className="rolling">Start</div>&nbsp;
          <div className="not_rolling">{heading}</div>
        </div>
        <p>{subHead}</p>
        <div className="_buttons">
          <Link to="/">{styleButton} </Link>
          <Link to="/">Already incorporated?</Link>
        </div>

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
      </div>
      <video
        className="container_video"
        autoPlay
        loop
        src="https://assets.website-files.com/609486d2fafa37698a57db5b/628d5e7d4d650e8461de6c7c_CleanShot%202022-05-24%20at%20153116-transcode.mp4"
      ></video>
      <div className="companies">
        <p>TRUSTED BY THE WORLD’S MOST INNOVATIVE COMPANIES</p>
        <div className="trusted">
          <img src={logo1.url} alt="" />
          <img src={logo2.url} alt="" />
          <img src={logo3.url} alt="" />
          <img src={logo4.url} alt="" />
          <img src={logo5.url} alt="" />
        </div>
      </div>
    </div>
  )
}
