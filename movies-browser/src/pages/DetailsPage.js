import React from 'react'

function DetailsPage() {
    return (
        <div className="pt-20 h-72 px-4 flex justify-evenly">
            <img className="w-1/4 h-full" src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="poster" />
            <div className="w-3/4 h-full py-2 px-4 flex flex-col justify-between">
                <h1 className="font-semibold">Steve Jobs</h1>
                <p> 2021 | 02:33 | Mark</p>
                <p>Cast: Actro 1, Actor 2, ...</p>
                <p className="text-justify">Description: An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.</p>
            </div>
        </div>
    )
}

export default DetailsPage
 