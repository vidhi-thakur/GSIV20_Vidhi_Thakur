import React, { useEffect, useState } from 'react'
import { useStateValue } from "../StateProvider"

function DetailsPage() {

    const [cast, setCast] = useState([])

    const [{details}] = useStateValue();
    
    useEffect(() => {
        getDetails()
        return () => {
        }
    }, [details])

    function getDetails() {
        const detailsUrl = `https://api.themoviedb.org/3/movie/${details.id}/credits?api_key=ec2002ddbbe47acdd0bd8fb216ffc072&language=en-US`;
        fetch(detailsUrl).then(res => res.json()).then(resJson => {
            resJson.cast.map(item => (setCast(cast => [...cast, item.name])))
        })
    }

    return (
        <div className="pt-20 h-auto px-4 flex flex-col sm:flex-row justify-evenly">
            <img className="sm:w-1/4 w-full max-h-h2 sm:max-h-h1" src={details.img} alt="poster" />
            <div className="sm:w-3/4 w-full py-2 sm:px-4 px-0 flex flex-col justify-between">
                <h1 className="font-semibold text-4xl">{details.title}</h1>
                <p className="mt-4"> Release date: {details.release_date}</p>
                <p className="mt-4 text-justify truncate">Cast: {cast.map(c => <span>{c}, </span>)}</p>
                <p className="text-justify mt-4">Description: {details.description}</p>
            </div>
        </div>
    )
}

export default DetailsPage
