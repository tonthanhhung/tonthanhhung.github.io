import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { useBioQuery } from "../graphql-hook/useBioQuery"
import { graphql, Link } from "gatsby"
import { rhythm } from "../utils/typography"
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"

const IndexPage = props => {
  const data = useBioQuery()
  const pageData = props.data
  const siteTitle = pageData.site.siteMetadata.title
  const posts = pageData.allMdx.edges
  return (
    <div className="h-screen flex flex-col sm:flex-row">
      <SEO
        title="Hùng's Blog"
        keywords={[`blog`, `gatsby`, `javascript`, `react`, "tonthanhhung"]}
      />
      <div className="flex flex-col h-screen w-full sm:w-72 md:w-80 p-8 border-r border-gray-400 bg-gray-200 pt-20">
        <div className="group relative rounded-full w-32 h-32 flex justify-center items-center overflow-hidden p-3  border-2 border-gray-700 mx-auto">
          <Img
            imgStyle={{
              objectFit: "contain",
            }}
            className="flex-1 h-full group-hover:hidden"
            fluid={data.avatar.childImageSharp.fluid}
          />
          <Img
            imgStyle={{
              objectFit: "contain",
            }}
            className="flex-1 h-full absolute top-0 left-0 right-0 hidden group-hover:block "
            fluid={data.avatarDark.childImageSharp.fluid}
          />
        </div>
        <h1 className="text-2xl my-4 font-bold">Ton Thanh Hung</h1>
        <div className="mb-4">
          <p>Frontend Developer</p>
          <p>I love JS and use React everydays.</p>
          <p>Unskilled designer</p>
        </div>
        <div className="flex mb-4">
          <a
            target="_blank"
            href="https://github.com/tonthanhhung"
            className="no-underline shadow-none cursor-pointer"
          >
            <FaGithubSquare className="text-4xl" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hungton/?locale=en_US"
            className="no-underline shadow-none cursor-pointer"
          >
            <FaLinkedin className="text-4xl" />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/tonthanhhung"
            className="no-underline shadow-none cursor-pointer"
          >
            <FaTwitterSquare className="text-4xl" />
          </a>
          <a
            target="_blank"
            href="mailto:tonthanhhung90@gmail.com"
            className="no-underline shadow-none cursor-pointer"
          >
            <FaEnvelopeSquare className="text-4xl" />
          </a>
        </div>
        <div className="flex items-center">
          <MdLocationOn className="text-4xl" />
          Ho Chi Minh city
        </div>
      </div>
      <div className="flex flex-col p-6">
        <div style={{ margin: "20px 0 40px" }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

export default IndexPage
