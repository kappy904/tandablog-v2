import React from "react"
import { graphql } from "gatsby"
import Container from "../layout/container"
import { GatsbySeo } from "gatsby-plugin-next-seo"

export default ({ data }) => {
  const post = data.markdownRemark
  const url = typeof window !== 'undefined' ? window.location.href : ''
  return (
    <>
      <GatsbySeo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        openGraph={{
          url: `${url}`,
          title: `T & a Blog | ${post.frontmatter.title}`,
          description: `${ post.frontmatter.description }`,
          images: [
            {
              url: `${ post.frontmatter.ogImage }`,
              width: 486,
              height: 254,
              alt: `${ post.frontmatter.title }`
            }
          ],
          site_name: "T & a blog"
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
        category
        description
        ogImage
        imageA
        imageB
      }
    }
  }
`
