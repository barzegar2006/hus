import React from 'react'

import "../StyleSheets/Certificates.css"

import Certificate1 from "../assets/1.png.webp"
import Certificate2 from "../assets/2.png.webp"
import Certificate3 from "../assets/3.png.webp"

const Certificates = () => {
    return (
        <div className='Certificates pt-5'>
            <div>
                <p className='h2'>Property{" "}
                    <p className='text-danger'> Certificates</p>
                </p>
                <div className='d-flex'>
                <div className='borderStyle pt-4 mx-2'></div>
                <div className='borderStyle2'></div>
                </div>
            </div>
            <div className='CertificatesImg d-flex'>
                <img src={Certificate1} alt="" />
                <img src={Certificate2} alt="" />
                <img src={Certificate3} alt="" />
            </div>
        </div>
    )
}

export default Certificates
