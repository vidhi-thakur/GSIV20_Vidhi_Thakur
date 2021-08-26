import React from 'react'

function Card({ img, title, rating, description }) {
    return (
        <div className="w-44 bg-gray-100 border-gray-300 h-auto my-4 mx-6 rounded-lg shadow">
            <img className="w-full h-40 rounded-t-lg" src={img} alt={`${title}-img`} />
            <div>
                <div className="flex justify-between items-center px-2 pt-2">
                    <h3 className="truncate font-semibold">{title}</h3><span>{rating}</span>
                </div>
                <p className="truncate text-sm rounded-b-lg p-2">{description}</p>
            </div>
        </div>
    )
}

export default Card
