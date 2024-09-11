import React from 'react'

import "../StyleSheets/Footer.css"
import logoImg from "../assets/logo.png.webp"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='descriptionFooter'>
                <p className='titleFooter'>About Us</p>
                <p className='text-secondary'>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing days open</p>
                <img src={logoImg} alt="" />
            </div>

            <div className='descriptionFooter'>
                <p className='titleFooter'>Contact Info</p>
                <p className='text-secondary'>
                    <p>Address :Your address goes here, your demo address.</p>
                    <p className='active'>Phone : +8880 44338899</p>
                    <p className='active'>Email : info@colorlib.com</p>
                </p>

            </div>

            <div className='descriptionFooter responsFooter'>
                <p className='titleFooter'>Important Link</p>
                <p className='text-secondary'>
                    <p className='active'>View Project</p>
                    <p className='active'>Contact Us</p>
                    <p className='active'>Testimonial</p>
                    <p className='active'>Proparties</p>
                    <p className='active'>Support</p>
                </p>

            </div>

            <div className='descriptionFooter responsFooter'>
                <p className='titleFooter'>Newsletter</p>
                <p className='text-secondary'>
                    <p>Heaven fruitful doesn't over lesser in days. Appear creeping seasons</p>
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="inter your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn iconInput" type="button"><i className='fa fa-paper-plane interEmail'></i></button>
                            </div>
                        </div>
                    </div>
                </p>

            </div>
            <hr />
        </div>
    )
}

export default Footer
