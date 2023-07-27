import MovieCard from "./moviecard";
import React from "react";
import { Link } from "react-router-dom";

export default function MovieList({ filteredlist}) {
  return (
    <React.Fragment>
      {filteredlist.map((car) => (
        <Link to={car.id}>
          <MovieCard
            title={car.title}
            description={car.description}
            posterURL={car.posterURL}
            rating={car.rating}
          />
        </Link>
      ))}
    </React.Fragment>
  );
}
