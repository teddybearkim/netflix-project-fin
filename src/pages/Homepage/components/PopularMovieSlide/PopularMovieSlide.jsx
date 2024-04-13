import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from "../../../../ui/MovieSlider/MovieSlider";
import { responsive } from "../../../../responsive/responsive";
import isLoadingSpinner from "../../../../ui/Spinner/isLoadingSpinner";
import "../PopularMovieSlide/PopularMovieSlide.style.css";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  if (isLoading) {
    return <div>{isLoadingSpinner()}</div>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="movie-container">
      <MovieSlider
        title="Top Popular Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default PopularMovieSlide