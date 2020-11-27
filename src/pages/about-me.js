import React from "react"
import Container from "../layout/container"

export default () => {
  return (
    <Container>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="page">

          <div className="thw-page-content">
            <div className="thw-autohr-bio">
              <p>&nbsp;</p>

              <h3><strong> Hello lovely people!</strong></h3>
            </div>
            <div className="thw-page-intro">

              Thanks for stopping by my blogging corner. <i>T &amp; a Blog</i> is my creative space to spill the tea on
              all things travel, beauty, food and more. I’m here to share my adventures, ramblings, tips and thoughts
              about anything and everything on this roller coaster ride called <i>life</i>. I am a twenty-something year
              old from Cape Town, South Africa living in Amsterdam with my husband and most adorable fur baby, Daisy. I
              hope you enjoy reading my posts as much as I love writing them!
            </div>
            <hr />
            <div>
              <p>Follow me on
                Instagram <span className="no-wrap"><a href="https://www.instagram.com/tashadilraj/"><i className="fa fa-instagram"
                                                                                                        aria-hidden="true"></i> tashadilraj</a></span>
                <br />
                For your daily dose of
                aww! <span className="no-wrap"><a href="https://www.instagram.com/daisy_the_pekingese/"><i className="fa fa-instagram"
                                                                                                           aria-hidden="true"></i> daisy_the_pekingese</a></span>
              </p>
            </div>
          </div>

          <div className="thw-featured-image">
            <img className="img-fluid"
                 src="/images/about-page.jpg"
                 alt="about" />
          </div>
        </div>
      </div>
    </Container>
  )
}
