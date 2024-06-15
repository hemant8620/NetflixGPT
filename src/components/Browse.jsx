import { useSelector } from "react-redux";
import useNowPLayingMovies from "../hooks/useNowPLayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSerach from "./GptSerach";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPLayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSerach />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
