import React, {useState} from 'react'
import heroImg from '../assets/images/hero.png'
import mint from '../assets/images/mint.png'
import {FaMinus, FaPlus} from 'react-icons/fa'
import { init } from '../web3/Web3Client'
import Web3 from 'web3'

export default function Hero() {

  const [connect, setConnect] = useState(false)
  const [mintCount, setMintCount] = useState(1)

  return (
    <div className='hero-main container-fluid d-flex flex-column align-items-center'>
        <img src={heroImg} style={connect === true ? {position:"absolute"} : {position:"relative"}} alt="" />
        <button className="btn btn-dark rounded-pill" style={connect === false ? {display: "block"}: {display: "none"}} onClick={() => {setConnect(!connect); init()}}>CONNECT WALLET</button>
        <div className="presale" style={connect === true ? {display: "block"}: {display: "none"}}>
          <h2>SALE STATUS</h2>
          <h4>PRE-SALE</h4>
          <span id="ca">0xdac32A97970b7322A9EDaF0Ae7CaD3526527D5EA</span>
          <div className="mintInfo mt-3">
            <div className="container p-0">
              <img src={mint} alt="" />
              <p id='price'>TOTAL PRICE: 0.5 ETH</p>
              <div id="quantitySet" className='d-flex'>
                <button className='border-end' disabled={mintCount < 2 ? true : false} onClick={() => setMintCount(mintCount - 1)}><FaMinus/></button>
                <p>{mintCount}</p>
                <button className='border-start' disabled={mintCount > 2 ? true : false} onClick={() => setMintCount(mintCount + 1)}><FaPlus/></button>
              </div>
            </div>
            <h3>{mintCount}/8888</h3>
          </div>
          <button className="btn btn-dark rounded-pill mt-4">MINT NOW</button>
        </div>
    </div>
  )
}
