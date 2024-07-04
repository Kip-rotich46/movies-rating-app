import { Grid, Card } from 'semantic-ui-react';
import { DisplayType } from './Home';
import { Link } from 'react-router-dom';


interface DisplayData {
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    title?: string;
    name?: string;
    vote_average: number;

}

interface Props {
    data: DisplayData[];
    displayType: DisplayType;
}

const ColumnDisplay = (props:Props) => {
    const { data, displayType} = props;

  return (
    <Grid columns={3} stackable centered verticalAlign='top' padded='vertically'>
        {data.map((displayData: DisplayData) => (
            <Grid.Column key={displayData.id}>
                <Card.Group>
                    <Link to={`/${displayType === DisplayType.Movies ? 'movie' : 'tvshow'}/${displayData.id}`}>
                    <Card
                     fluid
                      image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`}
                       header ={
                        displayType === DisplayType.Movies
                         ? displayData.title : displayData.name
                       }
                        meta={`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average}`}
                         description={displayData.overview.slice(0, 350) + '...'}>

                        </Card>
                        </Link>
                </Card.Group>
            </Grid.Column>
         ))}
        </Grid>

       
  )
}

export default ColumnDisplay