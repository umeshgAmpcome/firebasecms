import React from "react"
import logo from "../../../images/outfundlogo.svg"
import { Link } from "gatsby"

export default function GreatComapanies() {
  return (
    <div className="greatcompanies">
      <div className="inner_content">
        <h2>Great companies have great beginnings.</h2>
        <p>
          We’ve helped thousands of companies launch and grow in the US. Their
          stories continue to inspire us to help push the startup economy
          forward.
        </p>
      </div>
      <div className="inner_logo">
        <a href="https://www.firstbase.io/blog/how-revenue-based-finance-provider-outfund-is-democratizing-access-to-growth-capital">
          <img src={logo} alt="logo" />
        </a>
        <a href="https://www.firstbase.io/blog/how-revenue-based-finance-provider-outfund-is-democratizing-access-to-growth-capital">
          <img src={logo} alt="logo" />
        </a>
        <a href="https://www.firstbase.io/blog/how-revenue-based-finance-provider-outfund-is-democratizing-access-to-growth-capital">
          <img src={logo} alt="logo" />
        </a>
        <a href="https://www.firstbase.io/blog/how-revenue-based-finance-provider-outfund-is-democratizing-access-to-growth-capital">
          <img src={logo} alt="logo" />
        </a>
        <a href="https://www.firstbase.io/blog/how-revenue-based-finance-provider-outfund-is-democratizing-access-to-growth-capital">
          <img src={logo} alt="logo" />
        </a>
        <a href="https://www.firstbase.io/blog/how-revenue-based-finance-provider-outfund-is-democratizing-access-to-growth-capital">
          <img src={logo} alt="logo" />
        </a>
        <a href="https://www.firstbase.io/blog/how-revenue-based-finance-provider-outfund-is-democratizing-access-to-growth-capital">
          <img src={logo} alt="logo" />
        </a>
        <a href="https://www.firstbase.io/blog/how-revenue-based-finance-provider-outfund-is-democratizing-access-to-growth-capital">
          <img src={logo} alt="logo" />
        </a>
        <a href="https://www.firstbase.io/blog/how-revenue-based-finance-provider-outfund-is-democratizing-access-to-growth-capital">
          <img src={logo} alt="logo" />
        </a>
        <a href="https://www.firstbase.io/blog/how-revenue-based-finance-provider-outfund-is-democratizing-access-to-growth-capital">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="_buttons">
        <Link to="/">Read More Success Stories</Link>
      </div>
    </div>
  )
}
