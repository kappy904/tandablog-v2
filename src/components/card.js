import React from "react"


export default (props) => {
  return (
    <div className="col-lg-6 col-md-6 mb-6">
      <div className="post-standard-view post-standard-list2-style">
        <div className="featured-image">
          <a href={props.slug}>
            <img className="img-fluid right-image"
                 src={props.image}
                 alt={props.altTextImage} />
          </a>
        </div>
        <div className="post-content">
          <div className="post-header">
            <span className="category-meta"><a href={props.slug}
                                               rel="category tag">{props.category}</a></span>
            <h3 className="entry-post-title">
              <a href={props.slug}>{props.title}</a>
            </h3>
          </div>

          <div className="post-meta-list">
              <span className="list-post-date">
                Posted {props.date}
          </span>

          </div>

          <div className="post-intro-text">
            {props.blurb}
          </div>
          <div className="post-btn">
            <a href={props.slug}
               className="btn btn-primary">Read
              More</a>
          </div>
        </div>
      </div>
    </div>
  )
}
