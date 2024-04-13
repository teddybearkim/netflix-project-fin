import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";

// 배너 제작 ( popular 영화를 첫번째 영화를 보여준다)
// popular movie
// top rated movie
// up coming movie

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpcomingMovieSlide />
    </div>
  )
}

export default Homepage
