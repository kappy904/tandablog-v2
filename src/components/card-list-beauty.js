import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Card from "./card"

export default () => {
  return <StaticQuery
    query={graphql`query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 10, 
    filter: { frontmatter: { category: { eq: "Beauty" } } }) {
  edges {
    node {
      id
        excerpt(pruneLength: 200)
        frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        category
        altTextImage
        image
        }
        fields {
          slug
        }
      }
    }
  }
}
`

    }
    render={data => (
      <div className="row">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.id}
                title={node.frontmatter.title}
                category={node.frontmatter.category}
                date={node.frontmatter.date}
                image={node.frontmatter.image}
                altTextImage={node.frontmatter.altTextImage}
                blurb={node.excerpt}
                slug={node.fields.slug}/>
        ))}
      </div>
    )}
  />
}



