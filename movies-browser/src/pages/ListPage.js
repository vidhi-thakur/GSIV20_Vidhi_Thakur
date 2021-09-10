import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useStateValue } from '../StateProvider'
import CircularProgress from '@material-ui/core/CircularProgress';

function ListPage() {
    const [dataArray, setDataArray] = useState([])
    const [initialData, setInitialData] = useState([])
    const [loading, setLoading] = useState(false)

    const [{ input }] = useStateValue();

    useEffect(() => {
        setLoading(true)
        getData(1);
    }, [])

    useEffect(() => {
        searchData(input)
        return () => {
        }
    }, [input])


    function getData(pageNo) {
        // const apiURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=ec2002ddbbe47acdd0bd8fb216ffc072&language=en-US"
        const apiURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=ec2002ddbbe47acdd0bd8fb216ffc072&language=en-US&page=${pageNo}`;
        fetch(apiURL).then(response => response.json()).then(responseJson => {
            setDataArray(...dataArray, responseJson.results);
            setInitialData(...initialData, responseJson.results);
            setLoading(false)
        })
    }

    function searchData(text) {
        if (text === "") {
            setDataArray(initialData);
        } else {
            let temp = dataArray.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
            setDataArray(temp);
        }
    }

    return (
        <div className="flex flex-wrap justify-center lg:justify-start pt-20">
            {
                dataArray.map((d, index) => {
                    return (
                        <Card img={`https://image.tmdb.org/t/p/w500${d.poster_path}`} title={d.original_title} rating={d.vote_average} description={d.overview} id={d.id} key={d.id} release_date={d.release_date} searchData={searchData} />
                    )
                })
            }
            {loading && <div className="justify-center w-full flex my-4">
                <CircularProgress />
            </div>}
        </div>
    )
}

export default ListPage
