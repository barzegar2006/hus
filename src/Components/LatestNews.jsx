import React from 'react'

import "../StyleSheets/LatestNews.css"
import imgNews1 from "../assets/1.png (2).webp"
import imgNews2 from "../assets/2.png (2).webp"

const LatestNews = () => {
    return (
        <div className='news py-5'>
            <div className='py-3'><p className='fs-2 fw-bold text-center py-5'>Our Latest News
                <div className='justify-content-center d-flex'>
                    <div className='borderStyle pt-4 mx-2'></div>
                    <div className='borderStyle2'></div>
                </div>
            </p>
            </div>
            <div className='imgLatestNews'>
                <div className='itemPorperties1'>
                    <img src={imgNews1} alt="" />
                    <div className='porperties'>
                        <span className='titleNews'>| Porperties</span>
                        <p className='fs-4 fw-bold'>Footprints in Time: House in Kurashiki, Japan</p>
                        <span className='titleNews'>READ MORE</span>
                    </div>
                    <div>
                        <p className="date"><span className='dateNumber'>24</span> Nov</p>
                    </div>
                </div>

                <div className='itemPorperties1 responsCard'>
                    <img src={imgNews2} alt="" />
                    <div className='porperties'>
                        <span className='titleNews'>| Porperties</span>
                        <p className='fs-4 fw-bold'>Footprints in Time: House in Kurashiki, Japan</p>
                        <span className='titleNews'>READ MORE</span>
                    </div>
                    <div>
                        <p className="date"><span className='dateNumber'>24</span> Nov</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews
