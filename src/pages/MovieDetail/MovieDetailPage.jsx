import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import isLoadingSpinner from "../../ui/Spinner/isLoadingSpinner";
import { Alert, Container, Row, Col } from "react-bootstrap";
import MovieDetailInfo from "./components/MovieDetailInfo/MovieDetailInfo";
import MovieDetailMoreInfo from "./components/MovieDetailMoreInfo/MovieDetailMoreInfo";
import "./MovieDetailPage.style.css";
import MovieDetailCredits from "./components/MovieDetailCredits/MovieDetailCredits";

const MovieDetailPage = () => {
  const { id } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
    error,
  } = useMovieDetailQuery({ id });

  if (isLoading) {
    return <div>{isLoadingSpinner()}</div>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path}` +
            ")",
        }}
        className="detail-banner"
      ></div>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <MovieDetailInfo movie={movie} id={id} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MovieDetailCredits id={id} />
          </Col>
        </Row>
        <Row>
          <Col>
            <MovieDetailMoreInfo id={id} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetailPage;
