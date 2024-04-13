import React from 'react';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../ui/MovieSlider/MovieSlider';
import { responsive } from '../../../../responsive/responsive';
import isLoadingSpinner  from '../../../../ui/Spinner/isLoadingSpinner'

const UpcomingMovieSlide = () => {
	const { data, isLoading, isError, error } = useUpcomingMoviesQuery();


	if (isLoading) {
    return <div>{isLoadingSpinner()}</div>;
  }
	if (isError) {
		console.log('error?');
		return <Alert variant='danger'>Error: {error.message}</Alert>;
	}
	return (
		<div className="movie-container">
			<MovieSlider
				title='Upcoming Movies'
				movies={data?.results}
				responsive={responsive}
			/>
		</div>
	);
};

export default UpcomingMovieSlide;