import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useStateValue } from '../StateProvider'

function ListPage() {
    const [dataArray, setDataArray] = useState([])
    const [initialData, setInitialData] = useState([])

    const [{input}] = useStateValue();

    useEffect(() => {
        getData();
        return () => {
            getData();
        }
    }, [])
    
    useEffect(() => {
        searchData(input)
        return () => {
        }
    }, [input])

    async function getData() {
        const apiURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=ec2002ddbbe47acdd0bd8fb216ffc072&language=en-US_page=1";
        fetch(apiURL).then(response => response.json()).then(responseJson => {
            setDataArray(responseJson.results);
            setInitialData(responseJson.results);
        })
    }

    function searchData(text) {
        if (text === "") {
            setDataArray(initialData);
        } else {
            let temp = dataArray.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
            console.log("temp >>>", temp)
            setDataArray(temp);
            console.log("dataArray >>>",dataArray)
        }
    }

    return (
        <div className="flex flex-wrap justify-left pt-20">
            {
                dataArray.map(d => {
                    return (
                        <Card img={`https://image.tmdb.org/t/p/w500${d.poster_path}`} title={d.original_title} rating={d.vote_average} description={d.overview} id={d.id} key={d.id} release_date={d.release_date} searchData={searchData} />
                    );
                })
            }
        </div>
    )
}

export default ListPage
