import React from "react"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Helmet from "react-helmet"

export default ({ children }) => {
  return (
    <>
      <Helmet>
        <script id="s9-sdk" async defer content="eaba251b587345a79454c27da5561b09" src="//cdn.social9.com/js/socialshare.min.js"></script>
      </Helmet>
      <div className="inner-body-wrap">
        <div className="inner-body container">
          <div className="main-container">
            <div className="container">
              <div className="row flex-column">
                <Nav />
                <div className="row">
                  {children}
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <link rel="stylesheet"
              type="text/css"
              href="/css/bootstrap.min.css" />
        <link rel="stylesheet"
              type="text/css"
              href="/css/responsive.css" />
        <link rel="stylesheet"
              type="text/css"
              href="/css/style.css" />
      </Helmet>
    </>
  )
}
