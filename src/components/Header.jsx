import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className="profile">
                <div className="photo">
                    <img src="/assets/profile1.png" alt="" />
                    <div className="active"></div>
                </div>
                <div className='info'>
                    <div className='heading'><span>Timpu</span><img src="/assets/Vector.png" alt="" /></div>
                    <p>Chat assistant</p>
                </div>
            </div>
            <div className="status">
                <div className="active"></div>
                <span>Online</span>
            </div>
        </div>
    )
}

export default Header;