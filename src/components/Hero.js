import React from 'react'
import heroImg from '../assets/images/hero.png'

export default function Hero() {
  return (
    <div className='hero-main container-fluid d-flex flex-column align-items-center'>
        <img src={heroImg} alt="" />
        <button className="btn btn-dark rounded-pill">CONNECT WALLET</button>
    </div>
  )
}
