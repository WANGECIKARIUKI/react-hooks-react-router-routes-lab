import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>{/*{code here}*/}
  <h1>Movies Page</h1>
  {movies.map((movies) => (
  <div key= {movies.title}>
    <h2>Title: {movies.title}</h2>
    <h3>Time: {movies.time} minutes</h3>
    <ul>
      Genre:
      {movies.genres.map((genre) => (
        <li key = {genre}>{genre}</li>
      ))}
    </ul>
  </div>
  ))};
  </div>;
}

export default Movies;
