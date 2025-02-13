import "./FooterStyles.css";

import React from 'react'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="top">
        <div>
            <h1>Trio Tourist</h1>
            <p>Choose your favourite destination</p>
        </div>
        <div>
            <a href="/">
                <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href=".">
                <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href=".">
                <i className="fa-brands fa-youtube-square"></i>
            </a>
            <a href=".">
                <i className="fa-brands fa-twitter-square"></i>
            </a>
        </div>
      </div>

      
    </div>
  )
}

export default Footer;





