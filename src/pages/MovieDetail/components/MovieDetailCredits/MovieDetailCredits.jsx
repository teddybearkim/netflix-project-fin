import React, { useState } from "react";
import { useMovieDetailCreditsQuery } from "../../../../hooks/useMovieDetailCredits";
import { Alert, Col, Container, Row, Button } from "react-bootstrap";
import isLoadingSpinner from "../../../../ui/Spinner/isLoadingSpinner";
import CreditsCard from "../CreditsCard/CreditsCard";
import "./MovieDetailCredits.style.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const MovieDetailCredits = ({ id }) => {
  const [showMore, setShowMore] = useState(false);
  const {
    data: credits,
    isLoading,
    isError,
    error,
  } = useMovieDetailCreditsQuery({
    id,
  });

  if (isLoading) {
    return <div>{isLoadingSpinner()}</div>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const visibleCredits = showMore ? credits?.slice(0, 8) : credits?.slice(0, 4);

  return (
    <Container className="container-cast">
      <Row>
        <Col className="cast-flex">
          {visibleCredits?.length > 0 && (
            <div className="cast">
              <h3 className="mb-3 ms-2">Top Billed Cast</h3>
              <Row className="mb-4 item-align">
                {visibleCredits.map((item, index) => (
                  <Col key={index} xs="auto" className="mb-3">
                    <CreditsCard credits={item} className="credits-item" />
                  </Col>
                ))}
              </Row>
              {credits?.length > 4 && (
                <Button
                  variant="danger"
                  onClick={() => setShowMore(!showMore)}
                  className="showMore"
                >
                  {showMore ? <FaAngleUp /> : <FaAngleDown />}
                </Button>
              )}
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetailCredits;
