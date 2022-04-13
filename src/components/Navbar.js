import React from 'react'
import logo from '../assets/images/logo.png';
import {FaTwitter, FaDiscord} from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav px-3 ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Mission</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Roadmap</Link>
        </li>
      </ul>
      <div className="navSocials">
          <a href="/"><FaTwitter/></a>&nbsp;&nbsp;
          <a href="/"><FaDiscord/></a>
      </div>
    </div>
  </div>
</nav>
  )
}
