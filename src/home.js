import MovieList from "./movielist";
import Movies from "./data";
import { useState } from "react";

export default function Home() {
  const [list, setlist] = useState(Movies);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [posterURL, setposterURL] = useState("");
  const [rating, setrating] = useState("");
  const [video, setvideo] = useState("");
  const [id, setid] = useState("");
  const [error, setError] = useState("");
  const [query, setquery] = useState("");
  const [selected, setSelected] = useState("1");
  const [filteredlist, setfilteredlist] = useState(Movies);
  const [isfilter, setisfilter] = useState(false);

  const handleoptions = (event) => {
    setSelected(event.target.value);
  };

  const handletitle = (e) => {
    e.preventDefault();
    settitle(e.target.value);
  };

  const handledescription = (e) => {
    e.preventDefault();
    setdescription(e.target.value);
  };
  const handleposter = (e) => {
    e.preventDefault();
    setposterURL(e.target.value);
  };
  const handlerating = (e) => {
    e.preventDefault();
    setrating(e.target.value)
  };
  const handlevideo = (e) => {
    e.preventDefault();
    setvideo(e.target.value)
  };
  const handleid = (e) => {
    e.preventDefault();
    setid(e.target.value)
  };

  const handlefilters = (e) => {
    e.preventDefault();
    let result = Movies;
    if (query) {
      result = result.filter((Movie) => Movie.title.includes(query));
    }

    result = result.filter((Movie) => Movie.rating === selected);

    setfilteredlist(result);
    setisfilter(true);
  };

  const handlesubmitmovie = (e) => {
    e.preventDefault();

    if (
      title === "" ||
      description === "" ||
      posterURL === "" ||
      rating === "" ||
      video === "" ||
      id === ""
    ) {
      setError("Please fill in all fields.");
      return;
    } else {
      const newMovie = {
        title: title,
        description: description,
        posterURL: posterURL,
        rating: rating,
      };
      if (isfilter === true) {
        setlist([...list, newMovie]);
      } else {
        setlist([...list, newMovie]);
        setfilteredlist([...list, newMovie]);
      }

      settitle("");
      setdescription("");
      setposterURL("");
      setrating("");
      setvideo("");
      setid("");
    }
  };

  const handleclear = (e) => {
    setfilteredlist(list);
    setisfilter(false);
  };

  return (
    <div className="App">
      <form className="adding">
        <p>enter movie title:</p>
        <input value={title} onChange={handletitle} />
        <br />
        <p>enter movie description:</p>
        <input value={description} onChange={handledescription} />
        <br />
        <p>enter movie posterURL:</p>
        <input value={posterURL} onChange={handleposter} />
        <br />
        <p>enter movie rating:</p>
        <input value={rating} onChange={handlerating} />
        <br />
        <p>enter trailer</p>
        <input value={video} onChange={handlevideo} />
        <br />
        <p>enter id</p>
        <input value={id} onChange={handleid} />
        <br />
        <button onClick={handlesubmitmovie}>add movie</button>{" "}
        {error && <p>{error}</p>}
      </form>
      <label>search by title</label>
      <br />
      <input onChange={(e) => setquery(e.target.value)} />
      <select value={selected} onChange={handleoptions}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <button onClick={handlefilters}>apply filter</button>
      <button onClick={handleclear}>clear filters</button>
      <br />
      <br />
      <MovieList filteredlist={filteredlist} />
    </div>
  );
}
