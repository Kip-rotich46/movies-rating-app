import { useState } from "react";
import { Container, Header, Loader, Menu, Segment, Message } from "semantic-ui-react";
import { DisplayType } from "../home/Home";
import { useQuery } from "@tanstack/react-query";
import { fetchRatedMovies, fetchRatedTvShow } from "./Query";
import ColumnDisplay from "../home/ColumnDisplay";

const Rated = () => {
  const [activeTabs, setActiveTabs] = useState<DisplayType>(DisplayType.Movies);

  const { data: ratedMovies, isLoading: isLoadingRatedMovies } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: fetchRatedMovies,
  });

  const { data: ratedTvShows, isLoading: isLoadingRatedTvShow } = useQuery({
    queryKey: ["ratedTvShows"],
    queryFn: fetchRatedTvShow,
  });

  // Safely check if ratedMovies and ratedTvShows are defined and have results
  const hasRatedMovies = ratedMovies?.results?.length > 0;
  const hasRatedTvShows = ratedTvShows?.results?.length > 0;

  if (isLoadingRatedMovies || isLoadingRatedTvShow) {
    return <Loader active />;
  }

  return (
    <Container style={{ marginTop: 60 }}>
      {/* Navigation Menu */}
      <Menu pointing secondary>
        <Menu.Item
          name="Movies"
          active={activeTabs === DisplayType.Movies}
          onClick={() => setActiveTabs(DisplayType.Movies)}
        />
        <Menu.Item
          name="Tv Shows"
          active={activeTabs === DisplayType.TvShows}
          onClick={() => setActiveTabs(DisplayType.TvShows)}
        />
      </Menu>

      <Segment>
        {activeTabs === DisplayType.Movies ? (
          <div>
            <Header as={"h2"}>Rated Movies</Header>
            {/* Check if there are rated movies, if not display a message */}
            {!hasRatedMovies ? (
              <Message info>No rated movies available.</Message>
            ) : (
              <ColumnDisplay
                data={ratedMovies.results}
                displayType={DisplayType.Movies}
                isRated
              />
            )}
          </div>
        ) : (
          <div>
            <Header as={"h2"}>Rated TvShows</Header>
            {/* Check if there are rated TV shows, if not display a message */}
            {!hasRatedTvShows ? (
              <Message info>No rated TV shows available.</Message>
            ) : (
              <ColumnDisplay
                data={ratedTvShows.results}
                displayType={DisplayType.TvShows}
                isRated
              />
            )}
          </div>
        )}
      </Segment>
    </Container>
  );
};

export default Rated;
