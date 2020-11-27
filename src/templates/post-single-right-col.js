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
      <div className="row">
        <div className="col-lg-8" dangerouslySetInnerHTML={{ __html: post.html }}>
        </div>
        <div className="col-lg-4">
          <img className="my-4"
               src={post.frontmatter.imageA}
               alt={post.frontmatter.category}
               width="100%"/>
            <img className="my-4"
                 src={post.frontmatter.imageB}
                 alt={post.frontmatter.category}
                 width="100%"/>
        </div>
      </div>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
      category
        title
        imageA
        imageB
      }
    }
  }
`
