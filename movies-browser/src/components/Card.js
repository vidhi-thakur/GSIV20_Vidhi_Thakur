import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from "../StateProvider"

function Card({ img, title, rating, description, id, release_date }) {

    const [, dispatch] = useStateValue();

    const updateDetails = () => {
        dispatch({
            type: "SET_DETAILS",
            details: { img: img, title, rating, description, id, release_date }
        })
    }

    return (
        <div className="w-44 bg-gray-100 border-gray-300 h-auto my-4 mx-6 rounded-lg shadow">
            <img className="w-full h-44 rounded-t-lg" src={img} alt={`${title}-img`} />
            <div>
                <Link to={`/${id}/`} onClick={() => updateDetails()}>
                    <div className="flex justify-between items-center px-2 pt-2">
                        <h3 className="truncate font-semibold mr-2">{title}</h3><span>{rating}</span>
                    </div>
                </Link>
                <p className="truncate text-sm rounded-b-lg p-2">{description}</p>
            </div>
        </div>
    )
}

export default Card
