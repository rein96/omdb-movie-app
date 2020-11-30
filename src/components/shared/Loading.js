import React from 'react'
import './Loading.scss'

function Loading() {
  return (
    <div className='text-center'>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading
