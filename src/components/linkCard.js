import { DownloadOutlined } from '@ant-design/icons'
import React from 'react'
import SizedBox from './sizedBox'
import { Link } from 'react-router-dom'
export default function LinkCard(props) {
  return (
      <Link to={props.link} style={{boxShadow: "0px 5px 4px rgba(0,0,0,25%)"}} className='linkCard body-md px-4 py-3 d-flex align-content-center'>
      <DownloadOutlined style={{display: "flex", alignItems: "center", fontSize: "30px"}}/>
      <SizedBox width={10}/>
      {props.title}
      </Link>
  )
}
