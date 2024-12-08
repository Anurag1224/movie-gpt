import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);

  const { gptRecommendedMovie, movieNames } = gpt;

  if (!movieNames) return null;

  return (
    <div className="bg-black bg-opacity-80 mt-10">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={gptRecommendedMovie[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
