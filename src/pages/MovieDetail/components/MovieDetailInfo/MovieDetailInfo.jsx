import React, { useState } from 'react';
import './MovieDetailInfo.style.css';
import { Row, Col, Badge, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import MovieSocial from '../../../../ui/MovieSocial/MovieSocial';
import Line from '../Line/Line';
import { useMovieTrailerQuery } from '../../../../hooks/useMovieTrailer';
import YouTube from 'react-youtube';

const MovieDetailInfo = ({ movie, id }) => {
  const [show, setShow] = useState(false);
  const { data: video } = useMovieTrailerQuery({ id });

  const priceToString = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1, 
    },
  };

  return (
    <div>
      <Row className='mb-5'>
        <Col lg={6} className='detail-info'>
          {movie?.poster_path === null ? (
            <div className='poster-area'>
              <img
                src={`https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}
                className='empty-poster'
              />
            </div>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              className='movie-img'
              alt='movie-image'
            />
          )}
        </Col>
        <Col lg={6} className='detail-info'>
          <div className='mt-3 mb-3'>
            {movie?.genres.map((item, index) => (
              <Badge bg='danger' key={index}>
                {item.name}
              </Badge>
            ))}
          </div>
          <h1 className='mb-3 movie-title'>{movie?.title}</h1>
          <h5 className='mb-3'>{movie?.tagline}</h5>
          <div className='mb-3'>
            <MovieSocial movie={movie} />
          </div>
          <Line />
          <p>{movie?.overview}</p>
          <Line />
          <ul className='mt-4 mb-2 all-list'>
            <li>
              <Badge bg='danger' className='info-badge'>
                Budget
              </Badge>
              $ {priceToString(movie?.budget)}
            </li>
            <li>
              <Badge bg='danger' className='info-badge'>
                Revenue
              </Badge>
              $ {priceToString(movie?.revenue)}
            </li>
            <li>
              <Badge bg='danger' className='info-badge'>
                Release Date
              </Badge>
              {movie?.release_date}
            </li>
            <li>
              <Badge bg='danger' className='info-badge'>
                Run time
              </Badge>
              {movie?.runtime} 분
            </li>
          </ul>
          <Line />
          <div className='btn-trailer-area'>
            <button className='btn-trailer' onClick={() => setShow(true)}>
              <FontAwesomeIcon icon={faFilm} />
              <span>Watch Trailer</span>
            </button>
          </div>
        </Col>
      </Row>
      <Modal
        show={show}
        centered={true}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        contentClassName='modal-style'
      >
        <Modal.Header closeVariant='white' closeButton />
        <Modal.Body>
          <YouTube
            videoId={video && video[0]?.key}
            opts={opts}
            style={{ height: '100%' }}
            onReady={(event) => event.target.mute()}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MovieDetailInfo;