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
            resJson.case.map(item => (setCast(cast => [...cast, item.name])))
        })
    }

    return (
        <div className="pt-20 h-72 px-4 flex justify-evenly">
            <img className="w-1/4 h-full" src={details.img} alt="poster" />
            <div className="w-3/4 h-full py-2 px-4 flex flex-col justify-between">
                <h1 className="font-semibold">{details.title}</h1>
                <p> {details.release_date} | 02:33 | Mark</p>
                <p>Cast: {cast.map(c => <span>{c}, </span>)}</p>
                <p className="text-justify">Description: {details.description}</p>
            </div>
        </div>
    )
}

export default DetailsPage
