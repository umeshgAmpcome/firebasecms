import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Ctalastsection from "../components/CTAFirebase/Ctalastsection"
import Hero from "../components/Hero/Hero"

const pricing = ({ data }) => {
  console.log(data)
  const heroheading = data.allContentfulHero.edges[0].node.mainHeading
  const subheading = data.allContentfulHero.edges[0].node.subHeading
  const styleButton = data.allContentfulHero.edges[0].node.styleButton

  return (
    <Layout>
      <div className="pricing">
        <Hero
          heading={heroheading}
          subHead={subheading}
          styleButton={styleButton}
        />
        hi
        <Ctalastsection />
      </div>
    </Layout>
  )
}
export default pricing

export const query = graphql`
  query MyQuery {
    allContentfulHero(filter: { pageId: { eq: "pricing" } }) {
      edges {
        node {
          mainHeading
          subHeading
        }
      }
    }
  }
`
