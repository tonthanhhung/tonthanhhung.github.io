/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import { useBioQuery } from "../graphql-hook/useBioQuery"

function Bio() {
  const data = useBioQuery()
  const { author } = data.site.siteMetadata
  return (
    <Container>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

export default Bio
