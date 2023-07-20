import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <>
    <nav>

        

        
    <div class="hamburger-menu">
    <input className="nav_input" id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
    <span></span>
    </label>
        <div class="nav__logo">
            <img src="src/assets/logo.png" alt="Image of the logo"/>
        </div>
        <div class="nav__slogan">Unlock the Beat: Your One-Stop Song Shop</div>
        <div class="nav__search-">
                <input type="search" placeholder="Search"></input>
                <a href="#">
                    <img class="nav__search--logo-" src="src\assets\searchlogo.png"/>
                </a>
            </div>
            
    <ul class="menu__box">
        <li>
                <a href="#">
                    <img class="nav__search--logo" src="src\assets\searchlogo.png"/>
                </a>
        </li>
        
        <li>
            <div class="nav__search">
                <input type="search" placeholder="Search"></input>
            </div>
        </li>
        
        <li><a class="menu__item" href="#">Contact</a></li>
        <li><a class="menu__item" href="#">Twitter</a></li>
    </ul>
    </div>
    </nav>
    </>
    )
}

export default Navbar;