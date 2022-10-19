import React from "react"
import { Link } from "gatsby"
// import { BsArrowRightCircle } from "react-icons/Bs"

export default function FirebaseMailroomandAgent() {
  return (
    <div className="mailandagent">
      <div className="mailroom macontainer">
        <div className="left">
          <button href="#" className="firebasemail">
            Firebase Mailroom&trade;
          </button>
          <h3>The smartest home for all your mail.</h3>
          <p>
            Get a professional business address and virtual mailbox to instantly
            manage all your mailing needs - online, from any device.
          </p>

          <h6>Choose a premium address in New York, Miami, and more.</h6>
          <h6> View and manage your mail online, wherever you are.</h6>
          <h6>
            Authorized by the United States Postal Service to securely and
            confidentially handle all your physical mail.
          </h6>
          <div className="_buttons">
            <Link to="https://www.firstbase.io/mailroom">
              How Mailroom&trade; works
            </Link>
            <Link to="https://www.firstbase.io/pricing">See Pricing</Link>
          </div>
        </div>
        <div className="right">
          <img
            src="https://assets.website-files.com/609486d2fafa37698a57db5b/6298299dc142614b15c9a84e_mailroom-img%20(1)-p-1080.png"
            alt=""
          />
        </div>
      </div>
      <div className="agent macontainer">
        <div className="left">
          <button href="" className="firebasemail">
            Firebase Agent&trade;
          </button>
          <h3>Legal compliance on autopilot.</h3>
          <p>
            Never miss a deadline with our nationwide Registered Agent service
            and dashboard that automates compliance reminders, notices, annual
            filings, and more.
          </p>
          <div className="_buttons">
            <Link to="https://www.firstbase.io/agent">
              How Agent&trade; works
            </Link>
            <Link to="https://www.firstbase.io/pricing">See Pricing</Link>
          </div>
        </div>
        <div className="right">
          <img
            src="https://assets.website-files.com/609486d2fafa37698a57db5b/629827546cef920dbb7132b2_agent-img%20(1)-p-1080.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
