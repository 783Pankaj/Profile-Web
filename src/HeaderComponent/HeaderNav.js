import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"

const HeaderNav = () => {

    const [bar, setBar] = useState(false)
    return (
        <>
            <header className="head">
                <a className="logo" href="#">Logo</a>
                <nav className="navbar">
                    <ul className= {bar ? "nav-links-mobile" : "nav-links" } onClick={()=>setBar(false)}>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Gallary'>Gallary</NavLink>
                        </li>
                    </ul>
                    <button className="mobile-bar" onClick={()=>setBar(!bar)}>
                        {bar ? <ImCross/> : <FaBars />}
                        
                    </button>
                </nav>
            </header>
        </>
    );
}
export default HeaderNav;