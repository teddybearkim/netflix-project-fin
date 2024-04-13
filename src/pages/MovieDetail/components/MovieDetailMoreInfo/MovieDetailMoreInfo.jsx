import React, { useState } from 'react';
import './MovieDetailMoreInfo.style.css';
import ReviewBox from '../ReviewBox/ReviewBox';
import RecommendBox from '../RecommendMoviesBox/RecommendMoviesBox';
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
import { useRelatedMoviesQuery } from '../../../../hooks/useRecommendMovies';

const MovieDetailMoreInfo = ({ id }) => {
  const [btnActive, setBtnActive] = useState(true);
  const { data: review } = useMovieReviewQuery({ id });
  const { data: relatedMovies } = useRelatedMoviesQuery({ id });

  return (
    <div className='more-info-area'>
      <button
        className={`info-btn ${btnActive ? 'active' : ''}`}
        onClick={() => setBtnActive(!btnActive)}
      >
        REVIEW ({review?.length})
      </button>
      <button
        className={`info-btn ${btnActive ? '' : 'active'}`}
        onClick={() => setBtnActive(!btnActive)}
      >
        RELATED MOVIES ({relatedMovies?.length})
      </button>
      <div>
        {btnActive ? (
          <ReviewBox review={review} />
        ) : (
          <RecommendBox relatedMovies={relatedMovies} />
        )}
      </div>
    </div>
  );
};

export default MovieDetailMoreInfo;