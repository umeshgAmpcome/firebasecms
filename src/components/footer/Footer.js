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
              <Link to="/firebasepages/FirebaseStart">Firebase start</Link>
              <br />
              <Link to="/firebasepages/FirebaseLoop">Firebase loop </Link>{" "}
              <br />
              <Link to="/firebasepages/FirebaseMailroom">
                Firebase Mailroom
              </Link>
              <br />
              <Link to="/firebasepages/FirebaseAgent">Firebase Agent</Link>
              <br />
              <Link to="/firebasepages/IncorporationApi">
                Incorporation API
              </Link>
              <br />
              <Link to="/pricing">Pricing</Link>
              <br />
              <Link to="/rewards">Rewards</Link>
            </div>
            <div className="second">
              <p>Company</p>
              <Link to="/company/aboutus">About us</Link>
              <br />
              <Link to="/company/careers">Careers</Link>
            </div>
            <div className="third">
              <p>Resources</p>
              <Link to="https://www.firstbase.io/blog">Blog </Link>
              <br />
              <Link to="https://www.firstbase.io/guide">Founder's Guide</Link>
              <br />
              <Link to="https://www.firstbase.io/business-name-check">
                Free Businees Name Check
              </Link>
              <br />
              <Link to="https://www.firstbase.io/business-name-check-partners">
                Name Check Widget
              </Link>
              <br />
              <Link to="https://form.typeform.com/to/Tr7SUD3Y?typeform-source=firstbase-io.webflow.io">
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
            <p>© 2022 Firstbase.io, Inc. All rights reserved.</p>
            <Link>· Terms of Use </Link>
            <Link>· Privacy Policy</Link>
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
              Youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
