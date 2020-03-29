import React, { useRef } from "react";
import propTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, year, genres, summary, poster }) {
  const summaryRef = useRef(null);
  function summaryBtn() {
    summaryRef.current.innerHTML = { summary }.summary;
  }

  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h4 class="movie__title">{title}</h4>
        <h5 class="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genres">
              {genre}
            </li>
          ))}
        </ul>
        <p class="movie__summary" ref={summaryRef}>
          {summary.slice(0, 140)}...
          <button class="more__view" onClick={summaryBtn}>
            더보기
          </button>
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired
};

export default Movie;
