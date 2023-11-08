import React from 'react'
import Navbar from '../components/navbar'
import SizedBox from '../components/sizedBox'
import ActionButton from '../components/actionButton'

export default function Home() {
  return (
    <>
      <Navbar className='position-absolute'/>
      <div className='hero-image'>
      <div className='mx-5'>
        <SizedBox height={250}/>
        <div className='display-lg'>Sta <span className='highlight-box'>Schiscia</span>*</div>
        <SizedBox height={35}/>
        <div className='display-md'>&nbsp;L’ App della schiscetta</div>
        <SizedBox height={50}/>
        <ActionButton/>
      </div>
      <div className='mx-5'>
        <SizedBox height={250}/>
        <div className='display-sm'>
          <div style={{textAlign: "right"}}>*In dialetto milanese <br/> "Stai Tranquilla"</div>
        </div>
      </div>
      </div>
      <div className='d-flex'>
        <SizedBox width={100}/> 
        <div className='body-lg'>Saper cosa cucinare, <br/><span className='highlight-box' style={{backgroundColor: "#2D9BA8", color:"white", lineHeight: 0.8}}>esattamente</span> quando <br/>ne hai bisogno</div>
      </div>
      <SizedBox height={100}/> 
      <div className='d-flex justify-content-end' style={{textAlign: "right"}}>
        <div className='body-lg'>Molla quel riso in bianco, <br/>puoi fare di <span className='highlight-box' style={{backgroundColor: "#2D9BA8", color:"white", lineHeight: 0.8}}>meglio</span></div>
        <SizedBox width={100}/> 
      </div>
      <div className='banner-image'></div>
      <SizedBox height={100}/> 
      <div style={{textAlign: "center"}} className='body-lg'><span className='highlight-box' style={{backgroundColor: "#2D9BA8", color:"white", lineHeight: 0.8}}>Condividi</span> con i tuoi amici le ricette <br/> per la schiscetta perfetta</div>
    </>
  )
}
