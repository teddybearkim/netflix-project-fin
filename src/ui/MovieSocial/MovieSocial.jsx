import React from 'react';
import './MovieSocial.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

const MovieSocial = ({ movie }) => {
  return (
    <div className='overlay-info'>
      <FontAwesomeIcon icon={faImdb} style={{ color: `var(--color-yellow)` }} />
      <span>{movie?.vote_average}</span>
      <FontAwesomeIcon
        icon={faUsers}
        style={{ color: `var(--color-light-slate-gray)` }}
      />
      <span>{movie?.popularity}</span>
      <span className='adult'>{movie?.adult ? 'over 18' : 'under 18'}</span>
    </div>
  );
};

export default MovieSocial;