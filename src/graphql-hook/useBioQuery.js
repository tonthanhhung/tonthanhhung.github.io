import { graphql, useStaticQuery } from "gatsby"

export const useBioQuery = () => {
  return useStaticQuery(
    graphql`
      query BioQuery {
        avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        avatarDark: file(absolutePath: { regex: "/profile-pic-dark.png/" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
          siteMetadata {
            author
            social {
              twitter
              github
            }
          }
        }
      }
    `
  )
}
