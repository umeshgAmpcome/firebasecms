import React from "react"
// import Hero from "../components/Hero/Hero"
import Layout from "../components/layout"
import Ctalastsection from "../components/CTAFirebase/Ctalastsection"
// import Hero from "../components/Hero"
// import GreatComapanies from "../components/UI/home/GreatComapanies"
export default function pricing() {
  return (
    <Layout>
      <div>
        <Ctalastsection />
      </div>
    </Layout>
  )
}

// export const query = graphql`
//   query MyQuery {
//     allContentfulHero(filter: { pageId: { eq: "pricing" } }) {
//       edges {
//         node {
//           id
//           mainHeading
//           subHeading
//         }
//       }
//     }
//   }
//   # query MyQuery {
//   #   allContentfulHero {
//   #     edges {
//   #       node {
//   #         mainHeading
//   #         subHeading
//   #       }
//   #     }
//   #   }
//   # }
// `
