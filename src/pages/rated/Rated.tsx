import { useState } from "react";
import { Container, Header, Loader, Menu, Segment } from "semantic-ui-react";
import { DisplayType } from "../home/Home";
import { useQuery } from "@tanstack/react-query";

import { fetchRatedMovies, fetchRatedTvShow } from "./Query";
import ColumnDisplay from "../home/ColumnDisplay";
import { Navigate } from "react-router-dom";

const Rated = () => {
  const [activeTabs, setActiveTabs] = useState<DisplayType>(DisplayType.Movies);

  const { data: ratedMovies, isLoading: isLoadingRatedMovies } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn:  fetchRatedMovies,
  });

  const { data: ratedTvShows, isLoading: isLoadingRatedTvShow } = useQuery({
    queryKey: ["ratedTvShows"],
    queryFn: fetchRatedTvShow,
  });

  if ( isLoadingRatedMovies || isLoadingRatedTvShow){
    return <Loader active />;
  }

  if ( localStorage.getItem('guest_session_is') === null ){
    return <Navigate to='/auth' />
  }

  return (
    <Container style={{ marginTop: 60 }}>
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
            <ColumnDisplay
              data={ratedMovies.results}
              displayType={DisplayType.Movies}
              isRated
            />
          </div>
        ) : (
          <div>
            <Header as={"h2"}>Rated TvShows</Header>
            <ColumnDisplay
              data={ratedTvShows.results}
              displayType={DisplayType.TvShows}
              isRated
            />
          </div>
        )}
      </Segment>
    </Container>
  );
};

export default Rated;
