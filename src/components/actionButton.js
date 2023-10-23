import { AppleFilled } from '@ant-design/icons'
import React from 'react'
export default function ActionButton() {
  return (
    <button className='action-button label-sm'>
        <AppleFilled style={{ fontSize: '38px', color: 'white' }}/>
        &nbsp;Scarica ora
    </button>
  )
}
