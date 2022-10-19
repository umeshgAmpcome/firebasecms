import React from "react"
import { Link } from "gatsby"
import { BsArrowRightShort } from "react-icons/Bs"

export default function FirebaseStart() {
  return (
    <div className="firebasestart">
      <div className="firebase_section">
        <div className="firebase_upper">
          <button className="firebasemail">Firebase start&trade;</button>
          <h2>Launch your US business from anywhere, in minutes.</h2>
          <p>
            No paperwork or legal headaches. Our online platform automates the
            entire company formation process with compliance and 24/7 global
            customer support.
          </p>
          <div className="_buttons">
            <Link to="/">How it works</Link>
          </div>
        </div>
        <div className="firebase_lower">
          <div className="firebase_lowerupper">
            <div className="firebasecontent_left">
              <h3>Form your legal entity.</h3>
              <p>
                Choose an LLC or Corporation and the registration state for your
                business. We'll guide you through which is best for your
                business if you don't know.
              </p>
            </div>
            <div className="firebaseimage_right">
              <img
                src="https://assets.website-files.com/609486d2fafa37698a57db5b/628fb67d6a5287cedb45d54c_inccccc.svg"
                alt=""
              />
            </div>
          </div>
          <div className="firebase_lowerlower">
            <div className="firebase_lowerlower_left mlcontainer">
              <div className="content">
                <h3>Open a bank account without an EIN.</h3>
                <p>
                  Don't wait on the IRS. We'll give you a bank account faster
                  without needing an EIN. We're also authorized by the Internal
                  Revenue Service (IRS) to offer expedited EIN services if
                  needed. <br />
                  <a href="">
                    Learn more <BsArrowRightShort />
                  </a>
                </p>
              </div>
              <img
                src="https://assets.website-files.com/609486d2fafa37698a57db5b/629644bddcd05c1f604af666_ein.svg"
                alt=""
              />
            </div>
            <div className="firebase_lowerlower_right mlcontainer">
              <div className="content">
                <h3>Quickly create a cap table on Carta.</h3>
                <p>
                  Our integration with Carta allows you to create a cap table
                  just one click after incorporation. We will prepare your legal
                  documents, file your paperwork, and create all the essential
                  post-incorporation documents.
                </p>
              </div>
              <img
                src="https://assets.website-files.com/609486d2fafa37698a57db5b/632e448712d3d9c15b713475_Cap-tables-that-work-for-you.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
