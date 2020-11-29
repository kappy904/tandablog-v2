import React from "react"

export default () => {
  const fabShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="footer-wrap">
              <ul className="footer-social thw-share">
                <p>Let's socialise</p>
                <li><a href="https://www.instagram.com/tashadilraj/">I</a></li>
                <li><a href={fabShareUrl}>FB</a></li>
              </ul>
              <div className="thw-heart">See you soon!</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
