import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <nav className="navbar navbar-expand-lg thw-navbar-light">
      <Link className="thw-logo"
            to="/">
        <img src="images/logo.png"
             alt="logo" />
      </Link>

      <div className="collapse navbar-collapse thw-navbar">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <Link className="nav-link"
                  to="/">
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link"
                  to="/travel">Travel </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"
                  to="/skin">Skin</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"
                  to="/beauty">Beauty</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link"
                  to="/lifestyle">Lifestyle</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link active"
                  to="/about-me">About Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
