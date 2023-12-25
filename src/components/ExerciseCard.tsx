import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Checkbox, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteWorkouts } from "../redux/workouts/selectors";
import {
  removeFromFavoriteWorkouts,
  setFavoriteWorkouts,
} from "../redux/workouts/workoutsSlice";

export default function ExerciseCard({ data }) {
  const { name, gifUrl, id } = data;
  const favoriteWorkouts = useSelector(selectFavoriteWorkouts);
  const dispatch = useDispatch();

  const isInFavorites =
    favoriteWorkouts &&
    favoriteWorkouts.some((favoriteWorkout) => favoriteWorkout.id === data.id);

  const handleFavoriteToggle = () => {
    if (isInFavorites) {
      dispatch(removeFromFavoriteWorkouts(id));
    } else {
      dispatch(setFavoriteWorkouts(data));
    }
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={gifUrl}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom component="div">
          {name}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={handleFavoriteToggle}
        >
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
            checked={isInFavorites}
          />
        </IconButton>
        <Link
          to={{
            pathname: `/exercises/${name}/${id}`,
            state: { data },
          }}
          style={{ textDecoration: "none" }}
        >
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
