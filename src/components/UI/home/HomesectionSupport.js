import React from "react"
// import { AiOutlineEye } from "react-icons/Ai"
import logo from "../../../images/supportlogo1.svg"

export default function HomesectionSupport() {
  return (
    <div className="homesectionsupport">
      <div className="innerupper">
        <h2>Get more done with Firstbase.</h2>
        <p>Starting a company should be a celebration, not a nightmare.</p>
      </div>
      <div className="innerlower">
        <div className="hiddenfees supcontainer" >
          <img src={logo} alt="logo" />
          <h5>No surprises or hidden fees</h5>
          <p>
            Our flat and transparent pricing includes everything your business
            needs.
          </p>
        </div>
        <div className="support supcontainer" >
          <img src={logo} alt="" />
          <h5>24/7 Global Customer Support</h5>
          <p>
            Get helpful, real human answers from our dedicated support teams
            wherever you are.
          </p>
        </div>
        <div className="guarantee supcontainer" >
          <img src={logo} alt="" />
          <h5>60-Day Money Back Guarantee</h5>
          <p>
            If you’re not satisfied for any reason, you’ll get a full refund,
            minus state and third-party fees, within 60 days of purchase.
          </p>
        </div>
      </div>
    </div>
  )
}
