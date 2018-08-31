import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"> <img src={require('../images/logo-designcode.svg')} width="30" /> </Link>
      <Link to="/aboutus">Services</Link>
      <Link to="/services">About us</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
