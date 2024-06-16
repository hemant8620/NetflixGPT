import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GOOGLE_KEY } from "../utils/constants";
import lang from "../utils/language";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { gptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const genAI = new GoogleGenerativeAI(GOOGLE_KEY);
  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie) => {
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
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 Movies , comma seperated like the example result given ahead. Example Result: Veeram, Mangatha, Jilla, Viswasam";
    const result = await model.generateContent(query);
    const response = await result.response;
    const text = await response.text();
    const movies = text.split(", ");
    const promise = movies.map((movie) => searchMovieTmdb(movie));
    const bardResults = await Promise.all(promise);
    dispatch(gptMovieResult({ movieNames: movies, movieResults: bardResults }));
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[language].placeHolderGptSearch}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
