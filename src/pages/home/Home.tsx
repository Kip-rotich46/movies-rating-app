import { useState } from "react";
import { Button } from "semantic-ui-react";
import ColumnDisplay from "./ColumnDisplay";
import { fetchTvShows, fetchMovies } from "./Query";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

export enum DisplayType {
  Movies = "movies",
  TvShows = "tvshows",
}

const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  // Fetch movies
  const { data: movieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  // Fetch TV Shows
  const { data: tvShowData, isLoading: isLoadingTvShows } = useQuery({
    queryKey: ["tvshows"],
    queryFn: fetchTvShows,
  });

  // Redirect to Auth page if guest_session_id is missing
  if (localStorage.getItem("guest_session_id") === null) {
    return <Navigate to="/auth" />;
  }

  return (
    <div style={{ height: "auto" }}>
      {/* Buttons to toggle between Movies and TV Shows */}
      <div
        style={{
          margin: 69,
          display: "flex",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          justifyContent: "center",
          zIndex: 10,
        }}
      >
        <Button.Group>
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

      {/* Loading Indicator */}
      {isLoadingMovies || isLoadingTvShows ? (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <h3>Loading content...</h3>
        </div>
      ) : (
        <div style={{ marginTop: "6rem", padding: "1rem" }}>
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
