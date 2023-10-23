import React from 'react'

export default function SizedBox(props) {
  return (
    <div className={props.className? props.className : ""} style={{height: props.height + "px", width: props.width + "px"}}></div>
  )
}
