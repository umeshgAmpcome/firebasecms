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
              <a href="">Firebase start</a>
              <br />
              <a href="">Firebase loop </a> <br />
              <a href="">Firebase Mailroom</a>
              <br />
              <a href="">Firebase Agent</a>
              <br />
              <a href="">Incorporation API</a>
              <br />
              <a href="">Pricing</a>
              <br />
              <a href="">Rewards</a>
            </div>
            <div className="second">
              <p>Company</p>
              <a href="">About us</a>
              <br />
              <a href="">Careers</a>
            </div>
            <div className="third">
              <p>Resources</p>
              <a href="">Blog </a>
              <br />
              <a href="">Founder's Guide </a> <br />
              <a href="">Free Businees Name Check</a>
              <br />
              <a href="">Name Check Widget</a>
              <br />
              <a href="">LLC vs. C-Corp</a>
              <br />
            </div>
            <div className="fourth">
              <p>Supports</p>
              <a href="">Help Center</a>
              <br />
              <a href="">Contact Us </a> <br />
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
            <a href="">Twitter</a>.<a href="">Linkdin</a>.
            <a href="">Instagram</a>.<a href="">Youtube</a>
          </div>
        </div>
      </div>
    </div>
  )
}
