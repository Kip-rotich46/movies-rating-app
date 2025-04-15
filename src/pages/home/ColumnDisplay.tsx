import { Grid, Card, Form, Label } from "semantic-ui-react";
import { DisplayType } from "./Home";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { rateMovie, rateTvShow } from './Mutation';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title?: string;
  name?: string;
  vote_average: number;
  rating?: number;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
  isRated?: boolean;
}

const ColumnDisplay = ({ data, displayType, isRated }: Props) => {
  const [rating, setRating] = useState<number>(0);

  const onSuccess = () => {
    toast.success("Rating submitted successfully!");
  };

  const onError = () => {
    toast.error("Something went wrong while submitting your rating.");
  };

  const { mutate: rateMovieMutation } = useMutation({
    mutationKey: ['rateMovie'],
    mutationFn: (id: number) => rateMovie(id, rating),
    onSuccess,
    onError,
  });

  const { mutate: rateTvShowMutation } = useMutation({
    mutationKey: ['rateTvShow'],
    mutationFn: (id: number) => rateTvShow(id, rating),
    onSuccess,
    onError,
  });

  const rate = displayType === DisplayType.Movies ? rateMovieMutation : rateTvShowMutation;

  return (
    <Grid
      columns={3}
      stackable
      centered
      verticalAlign="top"
      padded="vertically"
    >
      {data.map((displayData: DisplayData) => (
        <Grid.Column key={displayData.id}>
          <Card.Group>
            <Link
              to={`/${displayType === DisplayType.Movies ? "movie" : "tvshow"}/${displayData.id}`}
            >
              <Card fluid>
                <Card.Content>
                  <Card.Header>
                    {displayType === DisplayType.Movies ? displayData.title : displayData.name}
                  </Card.Header>
                  <Card.Meta>
                    Release Date: {displayData.release_date} | Rating: {displayData.vote_average}
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                    alt="poster"
                    style={{ width: '100%', height: 'auto', marginBottom: '15px' }} // Ensuring full visibility of the image
                  />
                  <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}>
                    {displayData.overview.slice(0, 350)}...
                  </div>
                </Card.Content>
              </Card>
              {isRated && <Label color="green">Your Rating: {displayData.rating}</Label>}
            </Link>

            <Form style={{ marginTop: 10 }}>
              <Form.Group inline>
                <Form.Field>
                  <Form.Input
                    type="number"
                    min="0"
                    max="10"
                    step="0.5"
                    onChange={(e) => setRating(Number(e.target.value))}
                    action={{
                      color: 'violet',
                      labelPosition: 'right',
                      icon: 'star',
                      content: 'Rate',
                      onClick: () => rate(displayData.id),
                    }}
                  />
                </Form.Field>
              </Form.Group>
            </Form>
          </Card.Group>
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default ColumnDisplay;
