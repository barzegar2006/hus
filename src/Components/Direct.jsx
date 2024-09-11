import React from 'react'

import "../StyleSheets/Direct.css"
import imgDirect from "../assets/author.png.webp"

const Direct = () => {
  return (
    <div>
      <div className='direct'>
        <img src={imgDirect} alt="" />
        <p className='fw-bold fs-5'>Margaret Lawson</p>
        <p className=''>Creative Director</p>
        <div>
            <p className='fs-5 text-secondary textDirect'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet veritatis id animi earum tempora ratione accusantium fuga iusto ipsum fugit"</p>
        </div>
        <div className='py-4'>
            <span className='point pointActive'></span>
            <span className='point'></span>
            <span className='point'></span>
        </div>
      </div>
    </div>
  )
}

export default Direct
