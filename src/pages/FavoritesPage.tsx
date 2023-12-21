import { ImageList } from "@mui/material";
import { selectFavoriteWorkouts } from "../redux/Workouts/selectors";
import { useSelector } from "react-redux";
import ExerciseCard from "../components/ExerciseCard";

export const FavoritesPage = () => {
  const favoriteWorkouts = useSelector(selectFavoriteWorkouts);
  return (
    <div>
      <ImageList sx={{ width: "100%" }} cols={4}>
        {favoriteWorkouts &&
          favoriteWorkouts.map((workout) => (
            <ExerciseCard key={workout.id} data={workout} />
          ))}
      </ImageList>
    </div>
  );
};
