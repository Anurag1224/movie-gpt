import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)
    return (
        <div className="bg-gray-950">
            <div className="-mt-72 px-2 relative z-10 ">
            <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies} />
            <MovieList title = {"Upcoming"} movies = {movies.upcomingMovies} />
            <MovieList title = {"Top Rated"} movies = {movies.topRatedMovies} />
            <MovieList title = {"Popular"} movies = {movies.popularMovies} />
            <MovieList title = {"Action"} movies = {movies.nowPlayingMovies} />
            </div>
        </div>
    );
};

export default SecondaryContainer;