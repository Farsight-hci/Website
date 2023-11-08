import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className={'d-flex justify-content-between px-5 py-4 navbar w-100 ' + props?.className}>
        <Link to={'/'} className='d-flex display-sm' style={{color: "white"}}>FARSIGHT</Link>
        <Link to={'/resources'} className='a d-flex label-sm align-items-center'>Risorse</Link>
    </div>
  )
}
