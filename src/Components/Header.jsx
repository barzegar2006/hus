import { NavLink } from "react-router-dom"

import "../StyleSheets/Header.css"
import HamburgerMenu from "./HamburgerMenu"

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="nav">
                    <div className="logo fw-bold fs-3">
                        <span>HUS.</span>
                    </div>
                    <div className="menu2">
                        <div className="logo fw-bold fs-3">
                            <span>HUS.</span>
                        </div>
                        <HamburgerMenu />
                    </div>
                    <div className="nav-list">
                        <ul className="list">
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/home">About</NavLink></li>
                            <li><NavLink to="/home">Pages</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="contactUs mx-5">
                    <span className="mx-3"><NavLink>Login</NavLink></span>
                    <span>Call us +001 325 589</span>
                </div>
            </div>
            <div className="menu2">
                <HamburgerMenu />
            </div>
        </>
    )
}

export default Header
