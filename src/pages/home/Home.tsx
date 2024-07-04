import { useState } from "react";
import { Button } from "semantic-ui-react";
import ColumnDisplay from "./ColumnDisplay";

import { fetchTvShows, fetchMovies } from "./Query";
import { useQuery } from "@tanstack/react-query";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  const { data: movieData , isLoading: isLoadingMovies} = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  const { data: tvShowData , isLoading: isLoadingTvShows } = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShows,
  });

  return (
    <div style={{ height: "auto" }}>

      <div style={{ margin: 69, display: 'flex', position: 'fixed',top: 0, left: 0, right: 0, justifyContent: 'center' , zIndex:10 }}>
      
      <Button.Group  >
        <Button
          color={displayType === DisplayType.Movies ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.Movies)}
        >
          Movies
        </Button>
        <Button
          color={displayType === DisplayType.TvShows ? "blue" : undefined}
          onClick={() => setDisplayType(DisplayType.TvShows)}
        >
          TvShows
        </Button>
      </Button.Group>
      </div>

      {isLoadingMovies || isLoadingTvShows ? (
        <div>Loading...</div>
      ):( 
      <div >
        {displayType === DisplayType.Movies ? (
          <ColumnDisplay data={movieData.results} displayType={DisplayType.Movies} />
        ) : (
          <ColumnDisplay data={tvShowData.results} displayType={DisplayType.TvShows} />
        )}
      </div>
      )}
    </div>
  );
};

export default Home;
