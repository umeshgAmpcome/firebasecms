import React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerupper">
          <div className="left">
            <Link to="/" className="logo">
              <img
                src="https://assets.website-files.com/609486d2fafa37698a57db5b/609bf4ae6380ac34e545f653_firstbase-logo.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="right">
            <div className="first">
              <p>Products</p>
              <a href="/firebasepages/FirebaseStart">Firebase start</a>
              <br />
              <a href="/firebasepages/FirebaseLoop">Firebase loop </a> <br />
              <a href="/firebasepages/FirebaseMailroom">Firebase Mailroom</a>
              <br />
              <a href="/firebasepages/FirebaseAgent">Firebase Agent</a>
              <br />
              <a href="/firebasepages/IncorporationApi">Incorporation API</a>
              <br />
              <Link href="/pricing">Pricing</Link>
              <br />
              <Link to="/rewards">Rewards</Link>
            </div>
            <div className="second">
              <p>Company</p>
              <a href="/company/aboutus">About us</a>
              <br />
              <a href="/company/careers">Careers</a>
            </div>
            <div className="third">
              <p>Resources</p>
              <Link href="https://www.firstbase.io/blog">Blog </Link>
              <br />
              <Link href="https://www.firstbase.io/guide">Founder's Guide</Link>
              <br />
              <Link href="https://www.firstbase.io/business-name-check">
                Free Businees Name Check
              </Link>
              <br />
              <Link href="https://www.firstbase.io/business-name-check-partners">
                Name Check Widget
              </Link>
              <br />
              <Link href="https://form.typeform.com/to/Tr7SUD3Y?typeform-source=firstbase-io.webflow.io">
                LLC vs. C-Corp
              </Link>
              <br />
            </div>
            <div className="fourth">
              <p>Supports</p>
              <a href="/supports/helpcenter">Help Center</a>
              <br />
              <a href="/supports/contact">Contact Us </a> <br />
            </div>
          </div>
        </div>
        <div className="footermiddle">
          <div className="left">
            <p>
              Subscribe to receive our latest updates, features, founder guides,
              and success stories right to your inbox 🚀
            </p>
          </div>
          <div className="right">
            <input type="text" placeholder="Enter your email" />
            <button>Submit</button>
          </div>
        </div>
        <div className="footerbottom">
          <div className="left">
            <p>
              © 2022 Firstbase.io, Inc. All rights reserved. · Terms of Use ·
              Privacy Policy
            </p>
          </div>
          <div className="right">
            <a href="https://twitter.com/tryfirstbase" alt="_blank">
              Twitter .
            </a>
            <a
              href="https://www.linkedin.com/company/firstbase-io/"
              alt="_blank"
            >
              Linkdin.
            </a>
            <a href="https://www.instagram.com/firstbase.io/" alt="_blank">
              Instagram .
            </a>
            <a href="https://www.youtube.com/c/Firstbase" alt="_blank">
              Youtube.
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
