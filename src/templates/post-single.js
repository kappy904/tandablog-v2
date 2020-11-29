import React from "react"
import { graphql } from "gatsby"
import Container from "../layout/container"
import { GatsbySeo } from "gatsby-plugin-next-seo"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <GatsbySeo
        title={post.frontmatter.title}
        description='This example uses more of the available config options.'
        openGraph={{
          url: "https://tandablog.com/",
          title: `${post.frontmatter.title}`,
          description: `${ post.frontmatter.description }`,
          images: [
            {
              url: `${ post.frontmatter.ogImage }`,
              width: 800,
              height: 600,
              alt: "Og Image Alt"
            }
          ],
          site_name: "T &amp; a blog"
        }}
      />
      <Container>
        <h1 className="entry">
          {post.frontmatter.title}
        </h1>
        <div className="row">
          <div className="col-lg-8"
               dangerouslySetInnerHTML={{ __html: post.html }}>
          </div>
          <div className="col-lg-4">
            <img className="my-4"
                 src={post.frontmatter.imageA}
                 alt={post.frontmatter.category}
                 width="100%" />
            <img className="my-4"
                 src={post.frontmatter.imageB}
                 alt={post.frontmatter.category}
                 width="100%" />
          </div>
        </div>
      </Container>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        ogImage
        imageA
        imageB
      }
    }
  }
`
