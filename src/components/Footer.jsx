import React from 'react';
import { GrAttachment } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";


const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="msg-section">
                <div className="input">
                    <input type="text" placeholder='Type your message' />
                    <GrAttachment />
                </div>
                <button><IoIosArrowForward /></button>
            </div>
            <div className="footer">
                <span>Powered by </span>
                <span>Krunk.ai </span>
                <img src="/assets/logo.png" alt="" />
            </div>
        </div>
    )
}

export default Footer;