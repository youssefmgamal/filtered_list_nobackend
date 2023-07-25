import MovieCard from "./moviecard"
import React from "react"


export default function MovieList({filteredlist}){
return <React.Fragment>
{filteredlist.map((car)=> <MovieCard title={car.title} description={car.description} posterURL={car.posterURL} rating={car.rating} />)}
</React.Fragment>
}   