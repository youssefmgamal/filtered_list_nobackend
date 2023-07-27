import { useParams } from "react-router-dom";
import Movies from "./data";
import { Link } from "react-router-dom";

export default function MovieDetails() {
  let { id } = useParams();
  const movie = Movies.find((mov) => mov.id === id);

  return (
    <div>
      <p>{movie.description}</p>
      <br/>
      <Link to={"/"}>home</Link>
      <br/>
      <p>{movie.video}</p>
    </div>
  );
}
