import React from 'react'

import "../StyleSheets/SliderHome.css"

import imgslider from "../assets/1.png (1).webp"
import imgslider2 from "../assets/2.png (1).webp"
import imgslider3 from "../assets/3.png (1).webp"

const SliderHome = () => {
    return (
        <div className='d-flex slider'>

            <div className='imgItems'>
                <img src={imgslider} alt="" className=' imagesS' />
                <div className='about-img-slider'>
                    <p className='fs-4 fw-bold'>$35.000</p>
                    <p className='fs-5'>Colorful little aprtment</p>
                    <span className='fs-5'>2BD | 2BA | 920 SF</span>
                </div>
            </div>

            <div className='imgItems'>
                <img src={imgslider2} alt="" className=' imagesS responsimg1' />
                <div className='about-img-slider'>
                    <p className='fs-4 fw-bold'>$35.000</p>
                    <p className='fs-5'>Colorful little aprtment</p>
                    <span className='fs-5'>2BD | 2BA | 920 SF</span>
                </div>
            </div>

            <div className='imgItems'>
                <img src={imgslider3} alt="" className='imagesS responsimg2' />
                <div className='about-img-slider'>
                    <p className='fs-4 fw-bold'>$35.000</p>
                    <p className='fs-5'>Colorful little aprtment</p>
                    <span className='fs-5'>2BD | 2BA | 920 SF</span>
                </div>
            </div>

        </div>
    )
}

export default SliderHome
