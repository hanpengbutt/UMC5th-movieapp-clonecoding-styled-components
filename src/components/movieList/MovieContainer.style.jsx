import styled from "styled-components";
import movies from "../../services/movieDummy";
import MovieItem from "./MovieItem.style";

function MovieContainer() {
  return (
    <MovieContainerWrapper>
      {movies.results.map((item, index) => {
        return (
          <MovieItem
            key={index}
            title={item.title}
            poster={item.poster_path}
            voteAverage={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </MovieContainerWrapper>
  );
}

const MovieContainerWrapper = styled.div`
  width: 90vw;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 20px;
`;

export default MovieContainer;
