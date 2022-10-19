import React from "react"
import { Link } from "gatsby"

export default function Firebaseloop() {
  return (
    <div className="firebaseloop">
      <div className="inner">
        <div className="center">
          <a className="transparent" href="/firebasepages/FirebaseLoop">
            Firebase Loop
          </a>
          <h2>Instant access to the best growth tools.</h2>
          <p>
            Apply for banking, payment processing, payroll, accounting, and
            more, in one click with Firstbase Loop™.
          </p>
          <div className="_buttons">
            <Link to="/">Explore Firebase Loop &trade;</Link>
          </div>
          <div className="tooleslogo">
            <img
              src="https://assets.website-files.com/609486d2fafa37698a57db5b/6109c1e329b5b65c069aa01d_firstbase-brex.svg"
              alt=""
            />
            <img
              src="https://assets.website-files.com/609486d2fafa37698a57db5b/6109c2ac918aa5760e197499_firstbase-mercury.svg"
              alt=""
            />
            <img
              src="https://assets.website-files.com/609486d2fafa37698a57db5b/620e4a1b055da62df08144f0_deel.svg"
              alt=""
            />
            <img
              src="https://assets.website-files.com/609486d2fafa37698a57db5b/627c317f1aeb30175454f15a_firstbase-bench.svg"
              alt=""
            />
            <img
              src="https://assets.website-files.com/609486d2fafa37698a57db5b/63114939e2519fd73295fb87_CartaLogo_White.svg"
              alt=""
            />
            <img
              src="https://assets.website-files.com/609486d2fafa37698a57db5b/62f11b1b9955ec7c264236e3_every.svg"
              alt=""
            />
          </div>
        </div>
        <div className="threepages">
          <div className="_links">
            <Link to="#_image">
              <h5>One application for all your needs. </h5>
              <p>
                No more re-entering your company data again. We securely
                transfer all your required onboarding information to each
                selected partner.
              </p>
            </Link>
            <Link to="#_image">
              <h5>Integrations and rewards built for growth. </h5>
              <p>
                Grow your business with our partner integrations and get curated
                rewards, including cash incentives and credits.
              </p>
            </Link>
            <Link to="#_image">
              <h5>Save time with automated onboarding. </h5>
              <p>
                Apply for any service your business needs and get onboarded
                across all of our partners in just a few minutes.
              </p>
            </Link>
          </div>
          <div id="_image">
            <img
              src="https://assets.website-files.com/609486d2fafa37698a57db5b/629642955eba6a2df1c0b236_CleanShot%202022-05-31%20at%2009.29.49%402x-p-1080.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
