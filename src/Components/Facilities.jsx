import React from 'react'

import "../StyleSheets/Facilities.css"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"

const Facilities = () => {
    return (
        <div>
            <div className='Facilities'>
                <p className='textFacilities text-light'>Our Facilities</p>

                <div className='d-flex items'>
                    <div className="border cardItems">
                        <div>
                            <span><img src={icon1} alt="" className='icon' /></span>
                        </div>
                        <div>
                            <p className='py-3 fw-bold'>Planning Stage</p>
                        </div>
                        <div>
                            <p className='py-2 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                        <div>
                            <p className='pt-4 learn'>Learn More</p>
                        </div>
                    </div>

                    <div className="border cardItems">
                        <div>
                            <span><img src={icon2} alt="" className='icon' /></span>
                        </div>
                        <div>
                            <p className='py-3 fw-bold'>Planning Stage</p>
                        </div>
                        <div>
                            <p className='py-2 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                        <div>
                            <p className='pt-4 learn'>Learn More</p>
                        </div>
                    </div>

                    <div className="border cardItems cardItemsEnd">
                        <div>
                            <span><img src={icon3} alt="" className='icon hadset' /></span>
                        </div>
                        <div>
                            <p className='py-3 fw-bold'>Planning Stage</p>
                        </div>
                        <div>
                            <p className='py-2 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                        <div>
                            <p className='pt-4 learn'>Learn More</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facilities
