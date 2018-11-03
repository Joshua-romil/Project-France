import React from 'react'
import styled from 'styled-components'
import Wave from './wave';

const FooterGroup = styled.div`
    background: white;
    padding: 10px 0;
    display: grid;
    grid-gap: 20px;
`
const Text = styled.p`
    color: black;
    font-size: 14px;
    font-weight: 600;
    max-width: 500px;
    margin: 0 auto;
`

const Button = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2,0.8,0.2,1);

    &:hover{
        box-shadow: 0 20px 40px rgba(101,41,255,0.15);
        transform: translateY(-3px);    
    }

`

const LinkGroup = styled.div`
    width: 400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;

    a {
        transition: 0.8s;
        color: black;
    }

    a:hover{
        color: black;
    }

    img{
        width: 40px;
    }

    @media(max-width: 720px){
        width: 300px;
    }
    
`

const Copyright = styled.div`
    color: black;
    max-width: 400px;
    margin: 0 auto;
    justify-items:center;
    text-align: center;

    a{
        color: black;
    }

`

const WaveTop = styled.div`
    position: relative;
    width: 100%;
    top: -20px;
    transform: rotate(180deg);
`



const Footer = ({data, children}) => (

    //FooterGroup, Text, Button and LinkGroup are components.
    <FooterGroup>
    <WaveTop><Wave/></WaveTop>
        <LinkGroup>
            <img src={require('../images/facebook_icon.png')}/>
            <img src={require('../images/instagram_icon.png')}/>
            <img src={require('../images/linkedin_icon.png')}/>
        </LinkGroup>
      <Copyright>{children}</Copyright>
      <Text>© Veloar 2018 · www.veloar.com </Text>

    </FooterGroup>
)

export default Footer