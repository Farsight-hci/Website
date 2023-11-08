import React from 'react'
import Navbar from '../components/navbar'
import { Col } from 'react-bootstrap'
import LinkCard from '../components/linkCard'
import SizedBox from '../components/sizedBox'

export default function Resources() {
  return (
    <>
    <Navbar/>
    <div className='mx-5 my-2'>
      <div className='display-lg'>RISORSE</div>
      <SizedBox height={40}/>
      <div className='w-100 d-flex'>
        <Col sm={5}>
        <LinkCard title="Needfinding" link="https://github.com/Farsight-hci/Website/blob/main/Assignments/Needfinding.pdf"/>
        <SizedBox height={20}/>
        <LinkCard title="Raffinamento e focus" link="https://github.com/Farsight-hci/Website/blob/main/Assignments/Raffinamento%20e%20focus.pdf"/>
        <SizedBox height={20}/>
        <LinkCard title="Storyboard e prototipi"/>
        </Col>
        <Col></Col>
      </div>
    </div>
    </>
    
  )
}
