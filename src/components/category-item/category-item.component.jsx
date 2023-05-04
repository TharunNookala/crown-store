import React from 'react'
import "./categories.styles.scss";

function CategoryItem({ category }) {
    const { imageUrl, title, id } = category;
    return (
        <div key={id} className="category-container">
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>SHOP NOW</p>
            </div>
        </div>
    )
}

export default CategoryItem