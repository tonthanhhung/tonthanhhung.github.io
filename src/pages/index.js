import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    return (
      <div className="flex flex-1 flex-col sm:flex-row">
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="flex  flex-col w-full sm:w-72 md:w-80 p-6 border-r border-gray-400">
          <h1 className="text-red-500">
            Hi, I'm Hung Ton,
            <span role="img" aria-label="wave emoji">
              👋
            </span>
            <br />I love making things.
          </h1>
          <p>Front-end developer | Day dreamer | Note taker | Husband</p>
          <p>
            This starter comes out of the box with styled components and
            Gatsby's default starter blog running on Netlify CMS.
          </p>
          <p>Now go build something great!</p>
        </div>
        <div className="flex flex-col">
          <Link to="/blog/">
            <Button marginTop="35px">Go to Blog</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default IndexPage
