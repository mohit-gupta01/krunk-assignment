import React from 'react'

const tags = ["Clutch", "Fabric lining", "Baggit", "Multi Compartment"];

const Tag = ({ item }) => {
    return (
        <div className='tag'>
            <h1>{item}</h1>
        </div>
    )
}


const Tags = () => {
    return (
        <div className='tags-section'>
            <p>Popular tags for handbag</p>
            <div className="tags-container">
                <div className="tags">
                    {tags.map((item, index) => <Tag key={index} item={item} />)}
                </div>
                <div className="arrow">{">"}</div>
            </div>
        </div>
    )
}

export default Tags;