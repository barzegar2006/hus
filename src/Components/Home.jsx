import React from 'react'

import Counter from './Counter'
import Facilities from './Facilities'
import Certificates from './Certificates'
import SliderHome from './SliderHome'
import Direct from './Direct'
import ContactUs from './ContactUs'
import LatestNews from './LatestNews'

import "../StyleSheets/Home.css"
import BACK from "../assets/banner.png.webp"

const Home = () => {

  return (
    <div>
      <img src={BACK} alt="" className='w-100 bannerImg' />
      <div className="cardBlack">
        <div className="borderTop"></div>
        <h2 className='py-3 text-light text-h'>WE CREATE YOUR DEAM APPARTMENT</h2>
        <p className='text-light mt-5 firstLorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam itaque facere eveniet provident? Dignissimos laudantium vero alias quidem</p>
        <button className='btn btn-outline-danger px-5 py-3 mt-4'>View Project</button>
      </div>

      <div className='Realestate p-5'>
        <div className='imgEXP'>
          <div className='aboutEXP'>
            <span className='fw-bolder number'>10</span>
            <p className='text-center fs-4'>Years of Exprince</p>
          </div>
        </div>

        <div className='textEXP'>
          <p className='textStyle'>We are Hus</p>
          <span className='textStyle text-danger'>Realestate Company</span>
          <p className='text-secondary loremEXP'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>

          <div>
            <i class="fa fa-check-square-o iconTick"></i>
            <span className='text-secondary'>Lorem ipsum dolor sit amet</span>
          </div>

          <div>
            <i class="fa fa-check-square-o iconTick"></i>
            <span className='text-secondary'>Consectetur adipisicing elit, sed do</span>
          </div>

          <div>
            <i class="fa fa-check-square-o iconTick"></i>
            <span className='text-secondary'>Eiusmod tempor incididunt ut labore</span>
          </div>

          <div>
            <i class="fa fa-check-square-o iconTick"></i>
            <span className='text-secondary'>Ad minim veniam, quis nostrud.</span>
          </div>
          <div>
            <Counter />
          </div>
        </div>
      </div>
      <div>
        <Facilities />
      </div>
      <div>
        <Certificates />
      </div>
      <div>
        <SliderHome />
      </div>
      <div>
        <Direct />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <LatestNews />
      </div>
    </div>
  )
}

export default Home
