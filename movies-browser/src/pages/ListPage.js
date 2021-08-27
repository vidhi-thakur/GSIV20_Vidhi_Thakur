import Card from '../components/Card'
import React, { useEffect, useState } from 'react'

function ListPage() {
    const [dataArray, setDataArray] = useState([])
    useEffect(() => {
        getData();
        return () => {
            getData()
        }
    }, [])

    const apiURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=ec2002ddbbe47acdd0bd8fb216ffc072&language=en-US";
    function getData() {
        fetch(apiURL).then(response => response.json()).then(responseJson => {
            setDataArray(responseJson.results);
            console.log(responseJson.results)
        })
    }

    return (
        <div className="flex flex-wrap justify-center pt-20">
            {
                dataArray.map(d => {
                    return (
                        <Card img={`https://image.tmdb.org/t/p/w500${d.poster_path}`} title={d.original_title} rating={d.vote_average} description={d.overview} id={d.id} />
                    );
                })
            }
        </div>
    )
}

export default ListPage
