import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Homehero from "../components/UI/home/homehero"
import FirebaseStart from "../components/UI/home/FirebaseStart"

const home = ({ data }) => {
  console.log(data)
  const heroheading = data.allContentfulHero.edges[0].node.mainHeading
  const subheading = data.allContentfulHero.edges[0].node.subHeading
  const styleButton = data.allContentfulHero.edges[0].node.styleButton
  const logo1 = data.allContentfulHero.edges[0].node.logo1
  const logo2 = data.allContentfulHero.edges[0].node.logo2
  const logo3 = data.allContentfulHero.edges[0].node.logo3
  const logo4 = data.allContentfulHero.edges[0].node.logo4
  const logo5 = data.allContentfulHero.edges[0].node.logo5

  return (
    <Layout>
      <div className="home">
        <Homehero
          heading={heroheading}
          subHead={subheading}
          styleButton={styleButton}
          logo1={logo1}
          logo2={logo2}
          logo3={logo3}
          logo4={logo4}
          logo5={logo5}
        />
        <FirebaseStart />
      </div>
    </Layout>
  )
}
export default home

export const query = graphql`
  query MyQuery {
    allContentfulHero(filter: { pageId: { eq: "home" } }) {
      edges {
        node {
          id
          mainHeading
          subHeading
          styleButton
          logo1 {
            url
          }
          logo2 {
            url
          }
          logo3 {
            url
          }
          logo4 {
            url
          }
          logo5 {
            url
          }
        }
      }
      totalCount
    }
  }
  # query MyQuery {
  #   allContentfulHero {
  #     edges {
  #       node {
  #         mainHeading
  #         subHeading
  #       }
  #     }
  #   }
  # }
`
// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `
