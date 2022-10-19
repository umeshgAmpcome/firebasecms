import React from "react"
// import { AiOutlineEye } from "react-icons/Ai"
import logo from "../../../images/sendchamp.svg"

export default function Blinkingsection() {
  return (
    <div className="blinksection">
      <div className="block1 block">
        <img src={logo} alt="profile" className="brand" />
        <h3>
          "Excited to be a part of Firstbase’s journey as they democratize
          access to starting companies by making it accessible to everyone."
        </h3>
        <div className="profile">
          <img
            src="https://assets.website-files.com/609486d2fafa37698a57db5b/620aa33eb9a5ab4dd454e4d6_henry-ward-p-800.jpeg"
            alt="logo"
          />
          <h5>Hery ward</h5>
          <p>CEO</p>
        </div>
      </div>
      <div className="block2 block">
        <img src={logo} alt="" className="brand" />
        <h3>
          "Firstbase is tackling a big problem involving multiple government
          bureaucracies and this kind of relentless focus on the details is the
          only way to make launching a business truly seamless."
        </h3>
        <div className="profile">
          <img
            src="https://assets.website-files.com/609486d2fafa37698a57db5b/60eda4dcad74a0b2ee300e9d_firstbase-tyler-p-500.jpeg"
            alt="logo"
          />
          <h5>Hery ward</h5>
          <p>DEO</p>
        </div>
      </div>
      <div className="block3 block">
        <img src={logo} alt="" className="brand" />
        <h3>
          "Deciding to launch your own startup is hard enough. Firstbase takes
          what is often a big headache of incorporation for founders and
          simplifies the process into an efficient, personalized one stop shop."
        </h3>
        <div className="profile">
          <img
            src="https://assets.website-files.com/609486d2fafa37698a57db5b/60d4b291dd72bbd0060627f6_firstbase-dannyolinsky.jpg"
            alt="logo"
          />
          <h5>Hery ward</h5>
          <p>HEO</p>
        </div>
      </div>
    </div>
  )
}
