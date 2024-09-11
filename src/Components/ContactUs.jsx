import React from 'react'

import "../StyleSheets/ContactUs.css"

import imgContact from "../assets/quotation_bg.png.webp"

const ContactUs = () => {
    return (
        <div className='contactUS'>
            <div className='imgBackContact'>
                <img src={imgContact} alt="" />
                <div className='border contact'>
                    <div className='textContactUS'>
                        <p className='fs-1 fw-bold py-2 titleQuestions'>Get a free <br /> quotation Today!</p>
                        <p className='textQuestions'>Have any questions in mind?</p>
                        <button className='btn btn-outline-danger px-5 py-3 mt-4'>View Project</button>
                    </div>
                    <div className='phone'>
                        <p className='iconPhone'><i className='fa fa-phone fs-3'></i></p>
                        <div>
                            <span>say hello</span>
                            <p className='fw-bold numberPhone'>+44 563 986 4785</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
