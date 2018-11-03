import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg'
import './header.css'

class Header extends React.Component{

  //Intizialization
  constructor(props){
    super(props)

    //When we first init the header, hasScrolled is false
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    if(scrollTop > 50){
      this.setState({hasScrolled:true})
    }else{
      this.setState({hasScrolled:false})
    }
  }


  render(){
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          {/* Om vi har scrollat sätt då den vita loggan, annars sätt den svarta loggan  */}
          <Link to="/"> <img src={this.state.hasScrolled ? require('../images/veloar_logo_white.png') : require('../images/veloar_logo_black.png')} width="30" /> </Link>
          <Link to="/aboutus">Services</Link>
          <Link to="/services">About us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
