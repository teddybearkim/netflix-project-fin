import React from "react";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import Alert from "react-bootstrap/Alert";
import MovieSlider from "../../../../ui/MovieSlider/MovieSlider";
import { responsive } from "../../../../responsive/responsive";
import isLoadingSpinner  from '../../../../ui/Spinner/isLoadingSpinner'

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
 

  if (isLoading) {
    return <div>{isLoadingSpinner()}</div>;
  }
  if (isError) {
    console.log("error?");
    return <Alert variant="danger">Error: {error.message}</Alert>;
  }
  return (
    <div className="movie-container">
      <MovieSlider
        title="Top Rated Movies"
        movies={data?.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovieSlide;
