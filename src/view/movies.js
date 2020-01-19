import React, { useState, useEffect, useImperativeHandle } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardList from "../components/card-list";

import { loadMovies } from "../redux/actions";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);
  const stateError = useSelector(state => state.error);
  const isLoading = useSelector(state => state.isLoading);

  // https://upmostly.com/tutorials/build-an-infinite-scroll-component-in-react-using-react-hooks
  const handleScroll = () => {
    const current = window.innerHeight + document.documentElement.scrollTop;
    console.log(`current: ${current}`);
    const height = document.documentElement.offsetHeight;
    console.log(`height: ${height}`);
    if (current < height) return;

    if (!isLoading) {
      console.log("Fetch more list items!");
      dispatch(loadMovies());
    }
  };

  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoadImages = () => {
    dispatch(loadMovies());
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}> Hey Hey Yo Yo Movie list </h1>
      <CardList movies={movies} />
      {stateError && <h2>{stateError}</h2>}
      {/* <button
        onClick={handleLoadImages}
        style={{ width: "100%", height: "30px", backgroundColor: "green" }}
      >
        {" "}
        Load Movies
      </button> */}
    </div>
  );
};

export default Movies;
