import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Card from "./card"

export default () => {
 return <StaticQuery
    query = { graphql `query {
                allMarkdownRemark {
                  edges {
                    node {
                      excerpt(pruneLength: 200)
                      frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        category
                        blurb
                        altTextImage
                        image
                      }
                    }
                  }
                }
              }
`
    }
    render = { data => (
      <div className="row">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.id}
                title={node.frontmatter.title}
                category={node.frontmatter.category}
                date={node.frontmatter.date}
                image={node.frontmatter.image}
                altTextImage={node.frontmatter.altTextImage}
                blurb={node.excerpt} />
        ))}
      </div>
    )}
  />
}



