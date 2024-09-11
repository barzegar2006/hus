import React from 'react'

import "../StyleSheets/Blog.css"

import CartBlog from './CartBlog'
import cardBlog from '../Data/data'
import { NavLink } from 'react-router-dom'

const Blog = () => {

    return (
        <div>
            <div className='backBlog'>
                <div className='textBlog'>
                    <h2>Blog</h2>
                </div>
            </div>
            <div className='d-flex justify-contect-evenly pageBlog'>
                <div>
                    {
                        cardBlog.map(itemsBlog => (
                            <CartBlog itemsBlog={itemsBlog} key={itemsBlog.id} />
                        )
                        )
                    }
                </div>

                <div className='search'>
                    <div className='intSearch'>
                        <input type="text" placeholder='Search Keyword' />
                        <button type="submit">SEARCH</button>
                    </div>
                    <div className='category'>
                        <p className='fw-bold fs-5'>Category</p>
                        <p>Resaurant food(37)</p>
                        <p>Travel news(10)</p>
                        <p>Modern technology(03)</p>
                        <p>Product(11)</p>
                        <p>Inspiration21</p>
                        <p>Health Care (21)09</p>
                    </div>
                    <div className='post'>
                        <div className='titlePost'>
                            <h5 className='fw-bold fs-5'>Recent Post</h5>
                        </div>
                        <div className='imgPost'>
                            <div><img src="./post.png" alt="post" /></div>
                            <div>
                                <p>From life was you fish...</p>
                                <span className='text-secondary'>January 12, 2019</span>
                            </div>
                        </div>
                        <div className='imgPost'>
                            <div><img src="./post.png" alt="post" /></div>
                            <div>
                                <p>The Amazing Hubble</p>
                                <span className='text-secondary'>02 Hours ago</span>
                            </div>
                        </div>
                        <div className='imgPost'>
                            <div><img src="./post.png" alt="post" /></div>
                            <div>
                                <p>Astronomy Or Astrology</p>
                                <span className='text-secondary'>03 Hours ago</span>
                            </div>
                        </div>
                        <div className='imgPost'>
                            <div><img src="./post.png" alt="post" /></div>
                            <div>
                                <p>Asteroids telescope</p>
                                <span className='text-secondary'>01 Hours ago</span>
                            </div>
                        </div>
                    </div>

                    <div className='tagBlog'>
                        <div>
                            <p className='fw-bold fs-5'>Tag Clouds</p>
                        </div>
                        <div className='tagLinkBlog fw-bold'>
                            <NavLink><span>project</span></NavLink>
                            <NavLink><span>love</span></NavLink>
                            <NavLink><span>technology</span></NavLink>
                            <NavLink><span>travel</span></NavLink>
                            <NavLink><span>restaurant</span></NavLink>
                            <NavLink><span>life</span></NavLink>
                            <NavLink><span>style</span></NavLink>
                            <NavLink><span>design</span></NavLink>
                            <NavLink><span>illustration</span></NavLink>
                        </div>
                    </div>

                    <div className='boxInstagram'>
                        <div className='textFeeds'>
                            <p className='fw-bold fs-5'>Instagram Feeds</p>
                        </div>
                    </div>

                    <div className='intSearch'>
                        <input type="text" placeholder='Enter email' />
                        <button type="submit">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
