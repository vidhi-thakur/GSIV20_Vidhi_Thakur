import React from 'react'
import { useStateValue } from "../StateProvider"

function DetailsPage() {

    const [{details}] = useStateValue();

    return (
        <div className="pt-20 h-72 px-4 flex justify-evenly">
            <img className="w-1/4 h-full" src={details.img} alt="poster" />
            <div className="w-3/4 h-full py-2 px-4 flex flex-col justify-between">
                <h1 className="font-semibold">{details.title}</h1>
                <p> {details.release_date} | 02:33 | Mark</p>
                <p>Cast: Actro 1, Actor 2, ...</p>
                <p className="text-justify">Description: {details.description}</p>
            </div>
        </div>
    )
}

export default DetailsPage
