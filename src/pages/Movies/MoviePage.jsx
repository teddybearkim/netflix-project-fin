import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams, useNavigate } from "react-router-dom";
import isLoadingSpinner from "../../ui/Spinner/isLoadingSpinner";
import { Alert, Container, Row, Col, Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import MovieCard from "../../ui/MovieCard/MovieCard";
import "./MoviePage.style.css";

//경로 2
//nav바에서 클릭해서 온 경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 => keyword 관련된 영화를 보여줌
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleAllMoviesClick = () => {
    navigate("/movies");
    setPage(1);
  };

  if (isLoading) {
    return <div>{isLoadingSpinner()}</div>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <Container>
      <Row className="movie-row-container">
        <Col lg={8} xs={12}>
          <div className="filters-container">
            {keyword ? (
              <>
                <Row>
                  <div className="search-results-of">Search By "{keyword}"</div>
                </Row>
              </>
            ) : null}
            <Row>
              {keyword ? (
                <Button
                  variant="danger"
                  className="all-movie-btn"
                  onClick={handleAllMoviesClick}
                >
                  Remove
                </Button>
              ) : null}
            </Row>
          </div>
        </Col>

        {data?.results.length > 0 ? (
          <Col lg={12} xs={12}>
            <Row className="movie-cards-container-row">
              {data?.results.map((movie, index) => (
                <Col key={index} lg={3} xs={12}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>

            <div className="pagination-area">
              <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={data?.total_pages > 200 ? 200 : data?.total_pages}
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName="page-link-m"
                previousClassName="page-item"
                previousLinkClassName="page-link-m"
                nextClassName="page-item"
                nextLinkClassName="page-link-m"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link-m"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
                forcePage={page - 1}
              />
            </div>
          </Col>
        ) : (
          <Col lg={8} xs={12} className="no-found-box">
            <h2 className="no-search-results">No Search Results Found</h2>
          </Col>
        )}
      </Row>
    </Container>
  );
};
export default MoviePage;
