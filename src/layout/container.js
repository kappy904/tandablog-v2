import React from "react"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Helmet from "react-helmet"

export default ({ children }) => {
  return (
    <>
      <div className="inner-body-wrap">
        <div className="inner-body container">
          <div className="main-container">
            <div className="container">
              <div className="row flex-column">
                  <Nav />
                  {children}
                  <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Helmet>
        <link rel="stylesheet"
              type="text/css"
              href="css/bootstrap.min.css" />
        <link rel="stylesheet"
              type="text/css"
              href="css/responsive.css" />
        <link rel="stylesheet"
              type="text/css"
              href="css/style.css" />

      </Helmet>
    </>
  )
}
