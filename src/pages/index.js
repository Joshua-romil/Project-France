import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card';
import Section from '../components/section';
import Wave from '../components/wave';
import staticdata from '../../staticdata.json'
import styled from 'styled-components'

const WaveTop = styled.div`
    position:relative;
    width: 100%;
    top: -20px;
    transform: rotate(180deg);
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Tomorrow is a <strong>brand</strong> new day</h1>
        <p>We offer services for your social media profile. Start optimzing your social media flow today</p>
      </div>
    </div>
    <Wave/>
    <WaveTop><Wave/></WaveTop>
    <Section 
      image = {require('../images/wallpaper2.jpg')}
      logo = {require('../images/veloar_logo_background_small.png')}
      title = "More about us"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum arcu sed mauris vulputate viverra. Donec sed eleifend justo, ut mollis metus. Morbi fermentum semper vulputate. Donec lorem arcu, molestie id dignissim in, facilisis in nisi. Integer vulputate consequat magna, a laoreet justo mattis nec. Fusce maximus aliquam odio, ullamcorper volutpat nibh egestas ac. Aliquam non aliquet felis. Donec egestas laoreet molestie."/>
      {/* <div className="Cards">
      <h2>3 Services</h2>
      <div className="CardGroup">
        <Card title="Basic" text="30 days of Social Media Managment." image={require('../images/wallpaper.jpg')}/>
        <Card title="Standard" text="120 days of Social Media Managment." image={require('../images/wallpaper2.jpg')}/>
        <Card title="Premium" text="365 days of Social Media Managment." image={require('../images/wallpaper3.jpg')}/>
      </div>
    </div> */}
      
  </div>
)

export default IndexPage
