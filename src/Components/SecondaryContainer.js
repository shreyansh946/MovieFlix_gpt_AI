import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="graybackgroundColor">
        <div className="mt-0 md:-mt-40 pl-4 md:pl-6 relative z-20">
          <MovieList
            title={"Now Playing"}
            movies={movies.nowPlayingMovies}
            textColor={"text-white"}
            gradient={"from-black from-40% via-gray-950"}
          />

          <MovieList
            title={"Trending"}
            movies={movies.topRatedMovies}
            textColor={"text-white"}
            gradient={"from-black from-40% via-gray-950"}
          />

          <MovieList
            title={"Popular"}
            movies={movies.PopularMovies}
            textColor={"text-white"}
            gradient={"from-black from-40% via-gray-950"}
          />


          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upComingMovies}
            textColor={"text-white"}
            gradient={"from-black from-40% via-gray-950"}
          />

        </div>
      </div>
    )
  );
};

export default SecondaryContainer