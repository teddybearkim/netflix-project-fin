import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "../../../../ui/MovieCard/MovieCard";
import "./RecommendMoviesBox.style.css";

const RecommendBox = ({ relatedMovies }) => {
  return (
    <div>
      {relatedMovies.length === 0 ? (
        <Row className="mt-4 px-4">
          <Col>No Movies</Col>
        </Row>
      ) : (
        <Row className="mt-4 recommend-movie">
          {relatedMovies?.map((item, index) => (
            <Col lg={3} key={index} className="">
              <MovieCard movie={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default RecommendBox;
