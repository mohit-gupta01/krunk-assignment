import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const MessageResponse = () => {
    return (
        <div className='message-recieved'>
            <div className="message">
                <div className="product">
                    <img className='product-img' src="https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                        <div className='product-title'>
                            <span>Bags on Timpu </span><img src="/assets/Vector.png" alt="" />
                        </div>
                        <p>1123 products <IoIosArrowForward /></p>
                    </div>
                </div>
                <p>Or set filter and help us choose the best bag for you.</p>
            </div>
            <div className="time">4:48 PM</div>
        </div>
    )
}

export default MessageResponse