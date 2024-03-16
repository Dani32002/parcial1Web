import React from 'react'
import { Image } from 'react-bootstrap'
import banner from '../carroBanner.png';

export default function Header() {
  return (
    <div className="header">
        <h1 className="title">TuSegundazo.com</h1>
        <div className="lineShadow">
          <hr className="line"/>
        </div>
        <Image className="banner" src={banner} alt="banner"/>
        <hr className="line2"/>
    </div>
  )
}
