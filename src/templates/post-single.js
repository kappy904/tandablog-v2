import React from "react"
import { graphql } from "gatsby"
import Container from "../layout/container"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Container>
      <h1 className="entry">
        {post.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}>
      </div>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        imageA
        imageB
      }
    }
  }
`
