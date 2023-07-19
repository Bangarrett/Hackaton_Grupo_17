import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <>
    <nav>
        <div class="nav__logo"><img src="src/assets/logo.png" alt="Image of the logo"></img></div>
        <div class="nav__slogan">Unlock the Beat: Your One-Stop Song Shop</div>
        <div class="nav__search"><input type="search" placeholder="Search"></input><a href="#"><img class="nav__search--logo" src="src\assets\searchlogo.png"></img></a></div>
    </nav>
    </>
    )
}

export default Navbar;