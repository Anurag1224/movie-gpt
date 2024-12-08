import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useState } from "react";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {

  
  const [searchText, setSearchText] = useState("");
  const langKey = useSelector((store) => store.config.lang);
  
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
  
      return json.results;
    };
  
    const handleGptSearchClick = async () => {
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query :" +
        searchText +
        ". Only give me the names of 5 movies with comma ',' seperated like the example given ahead. Example Reasult: Gadar, Solay, Don, Golmal , 3 idiots";
  
      console.log(gptQuery);
  
      const gptSearchResults = await client.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
  
      if (!gptSearchResults.choices) {
        //write error handeling here
      }
  
      console.log(gptSearchResults);
      console.log(gptSearchResults?.choices?.[0].message?.content);
      const gptMovies =
        gptSearchResults?.choices?.[0].message?.content.split(",");
  
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  
      const tmdbSearchResults = await Promise.all(promiseArray);
  
      console.log(tmdbSearchResults);
      dispatch(addGptSearchMovieResult({movieNames: gptMovies , gptRecommendedMovie:tmdbSearchResults}));
    };


  return (
    <div className="pt-[10%] flex justify-center relative ">
      <form
        className="w-1/2 bg-black grid grid-cols-12 p-6 bg-opacity-80 rounded-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={searchText}
          // ref={searchText}
          type="text"
          className="px-4 py-1 mx-2 m-2 col-span-10"
          placeholder={lang[langKey].gptSearchPlaceholder}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-red-700 text-white rounded-sm px-4 py-1 m-2 col-span-2 "
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
