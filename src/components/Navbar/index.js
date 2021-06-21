import React from 'react';
import './style.css';

export default function Navbar() {
    return (
        <nav className="main_navbar">
            {/* navbar */}
            <div className="navbar_first_child">
                {/* navbar__text */}
            <div className="logo">
                <img src="https://media1.thehungryjpeg.com/thumbs2/ori_3656336_zcctflg10vp5lq513zlwjhv9yl6dmujqhvysf8t9_monogram-an-logo-design.jpg" alt="log" />
            </div>
            <ul className="ul_nav">
                {/* Navbar__ul */}
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
        </nav>
    )
}
